import User from "./database/models/user.entity";

export default global;

declare global {
  namespace Express {
    interface Request {
      user?: User;
      pipes: { [key: string]: any };
    }
  }
}
