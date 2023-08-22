// specs for quote carrier deriver

import { expect } from 'chai';
import { deriveQuoteCarriersOutcome } from './quoteCarrier.deriver';
import { Order } from '../../entities';

const mockOrder: Order = {
  id: '123',
  customer: 'Sally Bob',
  items: [
    {
      sku: 'SHOE-RED-1',
      quantity: 1,
      gramsPerItem: 100,
      price: 20,
    },
  ],
  quotes: [],
  status: 'RECEIVED',
};

describe('quoteCarrier.deriver', () => {
  it('returns ORDER NOT FOUND when passed an undefined order', () => {
    const result = deriveQuoteCarriersOutcome(undefined, ['UPS']);
    expect(result.outcome).to.eq('ORDER_NOT_FOUND');
  });
  it('returns ORDER ALREADY BOOKED when passed a booked order', () => {
    const result = deriveQuoteCarriersOutcome(
      {
        ...mockOrder,
        status: 'BOOKED',
      },
      ['UPS']
    );
    expect(result.outcome).to.eq('ORDER_ALREADY_BOOKED');
  });
  it('returns INVALID ORDER STATUS when passed a quoted order', () => {
    const result = deriveQuoteCarriersOutcome(
      {
        ...mockOrder,
        status: 'QUOTED',
      },
      ['UPS']
    );
    expect(result.outcome).to.eq('INVALID_ORDER_STATUS');
  });
  it('returns SUCCESS when making a valid quote', () => {
    const result = deriveQuoteCarriersOutcome(
      {
        ...mockOrder,
        status: 'RECEIVED',
      },
      ['UPS']
    );
    expect(result.outcome).to.eq('SUCCESS');
  });
});
