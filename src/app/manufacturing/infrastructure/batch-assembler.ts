import { Batch } from '../domain/model/batch.entity';
import { BatchResponse } from './batch-response';

/**
 * Assembles a Batch entity from a BatchResponse.
 */
export class BatchAssembler {
  static toEntityFromResponse(response: BatchResponse): Batch {
    return new Batch(
      response.id,
      response.productFormula,
      response.quantity,
      response.status
    );
  }
}
