export class ApiResponse {
  constructor(
    protected statusCode: number | boolean,
    protected data: string[] | number | string,
    protected message: string[] | string = "success"
  ) {
    this.statusCode = statusCode;
    this.data = data;
    this.message = message;
  }
}
