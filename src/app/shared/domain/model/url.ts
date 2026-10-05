/**
 * Value object representing a URL.
 */
export class Url {
  private readonly url: string;

  /**
   * Creates a new Url instance.
   *
   * @param value - The URL string.
   * @throws Error if the URL structure is invalid.
   */
  constructor(value: string) {
    if (!value) {
      this.url = '';
      return;
    }
    if (!Url.isValid(value)) {
      throw new Error(`Invalid URL: ${value}`);
    }
    this.url = value;
  }

  /**
   * Checks if a string is a valid URL.
   *
   * @param value - The string to check.
   * @returns True if the string is a valid URL, false otherwise.
   */
  public static isValid(value: string): boolean {
    try {
      new URL(value);
      return true;
    } catch (e) {
      return false;
    }
  }

  /**
   * Returns the URL string.
   */
  toString(): string {
    return this.url;
  }
}
