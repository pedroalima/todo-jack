import { Request } from 'express';

export interface RecoverUserRequest extends Request {
  user: {
    email: string;
    name: string;
  };
}
