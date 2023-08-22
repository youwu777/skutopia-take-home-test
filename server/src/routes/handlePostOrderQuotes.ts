// Generate quotes for an order for the given carriers and returns the quotes. Updates the order status to `QUOTED`.
import { withAsyncErrorHandling } from './withAsyncErrorHandling';
import { carrierCodeSchema } from '../domain/entities';
import { z } from 'zod-http-schemas';
import {
  quoteCarriers,
  QuoteCarriersResult,
} from '../domain/operations/quoteCarrier';

const carrierQuoteRequestSchema = z.object({
  carriers: z.array(carrierCodeSchema),
});

const urlParamsSchema = z.object({
  id: z.string().nonempty(),
});

export const handlePostOrderQuotes = withAsyncErrorHandling(
  async (req, res) => {
    const bodyParseResult = carrierQuoteRequestSchema.safeParse(req.body);
    if (!bodyParseResult.success) {
      res.status(400).json({
        error: 'INVALID_REQUEST_BODY',
        validationError: bodyParseResult.error,
      });
      return;
    }

    const urlParamsParseResult = urlParamsSchema.safeParse(req.params);
    if (!urlParamsParseResult.success) {
      res.status(400).json({
        error: 'INVALID_URL_PARAMETER',
        validationError: urlParamsParseResult.error,
      });
      return;
    }

    const orderId = urlParamsParseResult.data.id;
    const { carriers } = bodyParseResult.data;

    const result = await quoteCarriers(orderId, carriers);

    const outcomeStatusCodeMap: Record<QuoteCarriersResult['outcome'], number> =
      {
        SUCCESS: 200,
        ORDER_ALREADY_BOOKED: 200,
        ORDER_NOT_FOUND: 404,
        INVALID_ORDER_STATUS: 400,
      };

    res.status(outcomeStatusCodeMap[result.outcome]).json(result);
  }
);
