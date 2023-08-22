// specs for calculateCarrierFees
// Path: server\src\domain\operations\quoteCarrier\calculateCarrierFees.test.ts

import { calculateCarrierFees } from './calculateCarrierFees';
import { expect } from 'chai';
import { OrderItem } from '../../entities/orderItem';

describe('calculateCarrierFees', () => {
  it('should calculate the correct fee for UPS', () => {
    const items: Array<OrderItem> = [
      {
        sku: '1',
        quantity: 1,
        gramsPerItem: 100,
        price: 20,
      },
      {
        sku: '2',
        quantity: 2,
        gramsPerItem: 200,
        price: 40,
      },
    ];
    const result = calculateCarrierFees('UPS', items);
    expect(result).to.eq(815);
  });
  it('should calculate the correct fee for USPS', () => {
    const items: Array<OrderItem> = [
      {
        sku: '1',
        quantity: 1,
        gramsPerItem: 100,
        price: 20,
      },
      {
        sku: '2',
        quantity: 2,
        gramsPerItem: 200,
        price: 40,
      },
    ];
    const result = calculateCarrierFees('USPS', items);
    expect(result).to.eq(1056);
  }
  );
  it('should calculate the correct fee for FEDEX', () => {
    const items: Array<OrderItem> = [
      {
        sku: '1',
        quantity: 1,
        gramsPerItem: 100,
        price: 20,
      },
      {
        sku: '2',
        quantity: 2,
        gramsPerItem: 200,
        price: 40,
      },
    ];
    const result = calculateCarrierFees('FEDEX', items);
    expect(result).to.eq(1009);
  }
  );
});
