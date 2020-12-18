module.exports = class NotImplemented extends Error {
  constructor(message) {
    super(this.message)
    Error.captureStackTrace(this, this.constructor);
    this.name = this.constructor.name;
    this.message = message;
  }
}