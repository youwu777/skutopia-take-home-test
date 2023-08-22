import { CarrierCode, Order } from '../../entities';
import { calculateCarrierFees } from './calculateCarrierFees';

type Success = {
  outcome: 'SUCCESS';
  order: Order;
};
type InvalidOrderStatus = {
  outcome: 'INVALID_ORDER_STATUS';
  expected: 'RECEIVED';
  actual: Order['status'];
};
type OrderNotFound = {
  outcome: 'ORDER_NOT_FOUND';
};
type OrderAlreadyBooked = {
  outcome: 'ORDER_ALREADY_BOOKED';
  order: Order;
};

export type QuoteCarriersResult =
  | Success
  | InvalidOrderStatus
  | OrderNotFound
  | OrderAlreadyBooked;

export const deriveQuoteCarriersOutcome = (
  order: Order | undefined,
  carriers: Array<CarrierCode>
): QuoteCarriersResult => {
  if (!order) {
    return {
      outcome: 'ORDER_NOT_FOUND',
    };
  }
  if (order.status === 'BOOKED') {
    return {
      outcome: 'ORDER_ALREADY_BOOKED',
      order,
    };
  }
  if (order.status !== 'RECEIVED') {
    return {
      outcome: 'INVALID_ORDER_STATUS',
      expected: 'RECEIVED',
      actual: order.status,
    };
  }

  order.status = 'QUOTED';
  order.quotes = carriers.map((carrier) => ({
    carrier,
    priceCents: calculateCarrierFees(carrier, order.items),
  }));

  return {
    outcome: 'SUCCESS',
    order,
  };
};
