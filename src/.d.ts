interface UserInterface {
  name: string;
}

export {};

declare global {
  namespace Express {
    interface Request {
      user?: UserInterface;
      pipes: { [key: string]: any };
    }
  }
}
