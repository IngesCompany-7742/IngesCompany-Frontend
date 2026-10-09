import {BaseEntity} from '../../../shared/domain/model/base-entity';

/**
 * Represents an authenticated account in the IAM domain model.
 */
export class User implements BaseEntity {
  #id: number;
  #username: string;
  #roles: string[];

  /**
   * Creates a new user entity.
   * @param props - Immutable initialization values.
   */
  constructor(props: { id: number; username: string; roles?: string[] }) {
    this.#id = props.id;
    this.#username = props.username;
    this.#roles = props.roles || [];
  }

  get id(): number { return this.#id; }
  set id(value: number) { this.#id = value; }

  get username(): string { return this.#username; }
  set username(value: string) { this.#username = value; }

  get roles(): string[] { return this.#roles; }
  set roles(value: string[]) { this.#roles = value; }
}
