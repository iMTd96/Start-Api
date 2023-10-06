const ApiError = require("../utils/utils");
//const Database = require('../database/config').getPrismaInstance();
class ErrorMiddleware {
  constructor() {
    ErrorMiddleware.instance = null;
  }

  secureAsync(endpoint) {
    return async (req, res, next) => {
      try {
        await endpoint(req, res, next);
      } catch (error) {
        // console.log(error)
        next(error);
        //res.send(new ApiError(error.message, error.statusCode));
      }
    };
  }

  errorResponder(error, request, response, next) {
    response
      .status(500)
      .json(new ApiError({ debugErrorMessage: error.message }));
    next(error);
  }

  static getErrorInstance() {
    if (!ErrorMiddleware.instance) {
      ErrorMiddleware.instance = new ErrorMiddleware();
    }
    return ErrorMiddleware.instance;
  }
}

module.exports = ErrorMiddleware;
