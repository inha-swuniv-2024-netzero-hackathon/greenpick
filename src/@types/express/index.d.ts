import { User } from "../../domains/user/entities/user.entity";

declare module 'express' {

  interface Request {
    user?: { accessToken: string };
  }
}
