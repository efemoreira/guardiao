import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';

const COOKIE_NOTICE_DISMISSED_KEY = 'cookieNoticeDismissed';

const CookieConsentBanner: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (localStorage.getItem(COOKIE_NOTICE_DISMISSED_KEY) !== 'true') {
      setVisible(true);
    }
  }, []);

  const dismiss = () => {
    localStorage.setItem(COOKIE_NOTICE_DISMISSED_KEY, 'true');
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-0 inset-x-0 z-[60] bg-secondary text-white shadow-lg"
          style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
        >
          <div className="container mx-auto px-4 py-3 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-gray-200 text-center sm:text-left">
              Este site usa cookies para melhorar sua experiência e medir o uso das páginas.
            </p>
            <div className="flex items-center justify-center gap-4 shrink-0">
              <Link href="/cookies" onClick={dismiss} className="text-sm underline hover:text-primary transition-colors">
                Saiba mais
              </Link>
              <button
                onClick={dismiss}
                className="text-sm font-bold bg-primary text-white px-4 py-2 hover:opacity-90 transition-all"
              >
                Entendi
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieConsentBanner;
