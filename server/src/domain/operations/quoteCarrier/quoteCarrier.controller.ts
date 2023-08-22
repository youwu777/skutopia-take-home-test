import { CarrierCode, Order } from '../../entities';
import { ordersRepo } from '../../../repos/ordersRepo';
import {
  QuoteCarriersResult,
  deriveQuoteCarriersOutcome,
} from './quoteCarrier.deriver';

export const quoteCarriers = async (
  orderId: Order['id'],
  carriers: Array<CarrierCode>
): Promise<QuoteCarriersResult> => {
  const order = await ordersRepo.getOrder(orderId);

  const result = deriveQuoteCarriersOutcome(order, carriers);

  if (result.outcome === 'SUCCESS') {
    // update the status of the order to QUOTED
    await ordersRepo.updateOrder({ ...result.order });
  }

  return result;
};

export { QuoteCarriersResult };
