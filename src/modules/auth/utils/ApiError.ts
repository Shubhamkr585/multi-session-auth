export class ApiError extends Error {
  public readonly statusCode: number;

  constructor(statusCode: number, message: string) {
    super(message);
    this.statusCode = statusCode;
    
    // Fixes the prototype chain for built-in JavaScript classes
    Object.setPrototypeOf(this, ApiError.prototype);
    
    // Captures the exact line where the error occurred
    Error.captureStackTrace(this, this.constructor);
  }
}
