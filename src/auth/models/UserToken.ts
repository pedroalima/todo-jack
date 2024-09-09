export interface UserToken {
  access_token: string;
  user: {
    email: string;
    name: string;
  };
}
