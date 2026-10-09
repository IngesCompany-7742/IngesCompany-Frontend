/**
 * Captures credentials required to register a new IAM account.
 */
export class SignUpCommand {
  #username: string;
  #password: string;
  #roles: string[];

  constructor(props: { username: string; password: string; roles?: string[] }) {
    this.#username = props.username;
    this.#password = props.password;
    this.#roles = props.roles || [];
  }

  get username(): string { return this.#username; }
  set username(value: string) { this.#username = value; }

  get password(): string { return this.#password; }
  set password(value: string) { this.#password = value; }

  get roles(): string[] { return this.#roles; }
  set roles(value: string[]) { this.#roles = value; }
}
