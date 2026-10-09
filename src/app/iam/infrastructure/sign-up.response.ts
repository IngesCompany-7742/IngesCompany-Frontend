export interface SignUpResource {
  id: number;
  username: string;
  roles: string[];
}
export interface SignUpResponse extends SignUpResource {}
