/**
 * Represents a batch of products in the manufacturing domain.
 */
export class Batch {
  readonly #id: string;
  readonly #productFormula: string;
  readonly #quantity: number;
  readonly #status: string;

  constructor(id: string = '', productFormula: string = '', quantity: number = 0, status: string = 'Planned') {
    this.#id = id;
    this.#productFormula = productFormula;
    this.#quantity = quantity;
    this.#status = status;
  }

  get id(): string {
    return this.#id;
  }

  get productFormula(): string {
    return this.#productFormula;
  }

  get quantity(): number {
    return this.#quantity;
  }

  get status(): string {
    return this.#status;
  }
}
