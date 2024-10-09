// errors.js
const CustomError = require('./customError');

class BadRequestError extends CustomError {
    constructor(message,statusCode) {
        super(message || 'Bad Request',statusCode || 400);
    }
}

class UnauthorizedError extends CustomError {
    constructor(message) {
        super(message || 'Unauthorized', 401);
    }
}

class NotFoundError extends CustomError {
    constructor(message) {
        super(message || 'Not Found', 404);
    }
}

// Export the error classes
module.exports = {
    BadRequestError,
    UnauthorizedError,
    NotFoundError,
};