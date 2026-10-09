export interface SignInResource {
  id: number;
  username: string;
  token: string;
  roles: string[];
}
export interface SignInResponse extends SignInResource {}
