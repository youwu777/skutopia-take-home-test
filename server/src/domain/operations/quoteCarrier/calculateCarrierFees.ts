import { CarrierCode } from '../../entities';
import { OrderItem } from '../../entities/orderItem';

export const calculateCarrierFees = (
  carrier: CarrierCode,
  items: Array<OrderItem>
): number => {
  switch (carrier) {
    case 'UPS':
      return items.reduce((acc, item) => acc + item.gramsPerItem * 0.05, 800);
    case 'USPS':
      return items.reduce((acc, item) => acc + item.gramsPerItem * 0.02, 1050);
    case 'FEDEX':
      return items.reduce((acc, item) => acc + item.gramsPerItem * 0.03, 1000);
    default:
      throw new Error(`Unknown carrier: ${carrier}`);
  }
};
