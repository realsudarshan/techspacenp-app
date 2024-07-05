export class ApiError extends Error {
  constructor(
    public message: string = "Something went wrong",
    public statusCode: number,
    public error:  string | undefined,
    public stack: any = ""
  ) {
    super(message);
    this.message = message;
    this.statusCode = statusCode;
    this.error = error;
  }
}
