// CustomError.js
class CustomError extends Error {
    constructor(message, statusCode) {
        super(message);
        this.statusCode = statusCode; // Set the HTTP status code
        Error.captureStackTrace(this, this.constructor); // Capture stack trace
    }
}

module.exports = CustomError;