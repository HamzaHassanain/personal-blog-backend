import Debug from "./Debug.mjs";

export class ErrorResponse extends Error {
  error;
  page;
  constructor(message, code) {
    super(message);
    this.code = code;
    this.error = this.message;
  }
}
export class AuthError extends ErrorResponse {
  constructor(message, filedErrors) {
    super("Error while authentication: " + message, 400);
    this.filedErrors = filedErrors;
    // this.error = this.message;
  }
}
export class NotFoundError extends ErrorResponse {
  constructor(message) {
    super(message, 400);
  }
}
export class ServerError extends ErrorResponse {
  constructor(message) {
    super("Server Error: " + message, 500);
  }
}
