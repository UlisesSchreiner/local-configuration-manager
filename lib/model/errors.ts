export class FileNotFound extends Error {
  constructor(path: string, message: string = "Error config file not found") {
    super(path + " - " + message);

    this.name = this.constructor.name;

    Error.captureStackTrace(this, this.constructor);
  }
}
