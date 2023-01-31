import Debug from "./Debug.mjs";

export class ErrorHandler extends Error {
  error;
  constructor(message, code) {
    super(message);
    this.code = code;
    this.error = this.message;
  }
}
export class AuthError extends ErrorHandler {
  constructor(message, filedErrors) {
    super("Error while authentication: " + message, 400);
    this.filedErrors = filedErrors;
    // this.error = this.message;
  }
}
export class NotFoundError extends ErrorHandler {
  constructor(message) {
    super(message, 400);
  }
}
export class ServerError extends ErrorHandler {
  constructor(message) {
    super("Server Error: " + message, 500);
  }
}
