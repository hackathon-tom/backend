export default class HttpException extends Error {
  public message: string;
  public status: number;
  public errors: string[];
  /**
   * TODO: instead of an status code, we send a status text
   */
  constructor(message: string, status: number, errors: string[]) {
    super(message); //not necessary
    this.message = message;
    this.status = status;
    this.errors = errors;
  }
}
