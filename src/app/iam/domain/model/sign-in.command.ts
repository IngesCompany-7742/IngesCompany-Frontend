/**
 * Captures credentials required to authenticate in the IAM context.
 */
export class SignInCommand {
  #username: string;
  #password: string;

  constructor(props: { username: string; password: string }) {
    this.#username = props.username;
    this.#password = props.password;
  }

  get username(): string { return this.#username; }
  set username(value: string) { this.#username = value; }

  get password(): string { return this.#password; }
  set password(value: string) { this.#password = value; }
}
