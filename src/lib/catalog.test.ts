import { calculatePlan } from './catalog';
import { generateWhatsAppLink, planos } from './utils/utils';
import { getPlansSchema } from '@/app/seoSchemas';

describe('Condições comerciais', () => {
  it('cobra o Vigia por cliente, independentemente da quantidade', () => {
    expect(calculatePlan('vigia', 1).annual).toBe(99);
    expect(calculatePlan('vigia', 400).annual).toBe(99);
    expect(calculatePlan('vigia', 10).monthly).toBeNull();
  });
  it('distingue 12 mensalidades do pagamento anual à vista para 10 equipamentos', () => {
    expect(calculatePlan('essencial', 10)).toMatchObject({ monthly: 110, annual: 1100, saving: 220 });
    expect(calculatePlan('completo', 10)).toMatchObject({ monthly: 180, annual: 1800, saving: 360 });
  });
  it.each([0, -1, 1.5, NaN, Infinity, 10000])('rejeita quantidades inválidas: %s', quantity => {
    expect(() => calculatePlan('essencial', quantity)).toThrow(RangeError);
  });
  it('informa no SEO a unidade e o período dos preços exibidos', () => {
    const offers = getPlansSchema(planos).itemListElement.map(item => item.item);
    expect(offers[0].priceSpecification.billingDuration).toBe('P1Y');
    expect(offers[1].priceSpecification).toMatchObject({ billingDuration: 'P1M', referenceQuantity: { unitText: 'extintor' } });
  });
});
describe('WhatsApp', () => {
  it.each(['(85) 8804-0691', '8588040691', '558588040691'])('normaliza %s sem duplicar o país', phone => {
    const url = new URL(generateWhatsAppLink(phone, 'Quero recarga, não compra.'));
    expect(url.pathname).toBe('/558588040691');
    expect(url.searchParams.get('text')).toBe('Quero recarga, não compra.');
  });
});
