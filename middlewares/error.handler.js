const logErrors = (err, req, res, next) => {
  next(err);
};

const errorHandler = (err, req, res, next) => {};

const boomErrorHandler = (err, req, res, next) => {
  if (err.isBoom) {
    const { output } = err;
    res.status(output.statusCode).json(output.payload);
  }
  next(err);
};

module.exports = { logErrors, errorHandler, boomErrorHandler };
