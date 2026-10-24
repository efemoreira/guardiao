export type AnalyticsConsent = 'accepted' | 'rejected';
export const CONSENT_KEY = 'guardiao.analytics-consent.v1';
export const CONSENT_EVENT = 'guardiao:analytics-consent';
export const PREFERENCES_EVENT = 'guardiao:cookie-preferences';
let memoryConsent: AnalyticsConsent | null = null;
export function readConsent(): AnalyticsConsent | null {
  if (typeof window === 'undefined') return null;
  try {
    const value = window.localStorage.getItem(CONSENT_KEY);
    return value === 'accepted' || value === 'rejected' ? value : memoryConsent;
  } catch { return memoryConsent; }
}
export function saveConsent(value: AnalyticsConsent) {
  memoryConsent = value;
  try { window.localStorage.setItem(CONSENT_KEY, value); } catch { /* Preference remains valid for this page. */ }
  if (value === 'rejected') {
    const domains = [undefined, window.location.hostname, `.${window.location.hostname}`];
    const parts = window.location.hostname.split('.');
    if (parts.length > 2) domains.push(`.${parts.slice(1).join('.')}`);
    document.cookie.split(';').forEach(cookie => {
      const name = cookie.split('=')[0].trim();
      if (/^_ga(?:_|$)/.test(name)) domains.forEach(domain => {
        document.cookie = `${name}=; Max-Age=0; path=/${domain ? `; domain=${domain}` : ''}`;
      });
    });
  }
  window.dispatchEvent(new Event(CONSENT_EVENT));
}
