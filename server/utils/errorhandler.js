// Error Handler Class
class ErrorHandler extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;

    Error.captureStackTrace(this, this.constructor); // captureStackTrace is a method of the Error class that allows us to capture the stack trace of our error and store it on the object itself
  }
}

module.exports = ErrorHandler;
