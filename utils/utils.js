class ApiError {
  constructor({ clientErrorMessage = "", debugErrorMessage = "" }) {
    this.clientErrorMessage = clientErrorMessage;
    this.debugErrorMessage = debugErrorMessage;
  }
}

module.exports = ApiError;
