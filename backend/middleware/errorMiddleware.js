// errorMiddleware.js
const errorMiddleware = (err, req, res, next) => {
    const statusCode = err.statusCode || 500; // Default to 500 if status code is not set
    const message = err.message || 'Internal Server Error';

    res.status(statusCode).json({
        status: 'error',
        statusCode,
        message,
    });
};

module.exports = errorMiddleware;