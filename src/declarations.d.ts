import User from "./database/models/user.entity";

declare global {
  namespace Express {
    interface Request {
      user?: User;
      pipes: { [key: string]: any };
    }
  }
}
