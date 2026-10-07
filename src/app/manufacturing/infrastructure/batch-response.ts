/**
 * Represents the response for a batch operation in the manufacturing context.
 */
export interface BatchResponse {
  id: string;
  productFormula: string;
  quantity: number;
  status: string;
}
