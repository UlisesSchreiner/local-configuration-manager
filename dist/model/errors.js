"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class FileNotFound extends Error {
    constructor(path, message = 'Error config file not found') {
        super(path + ' - ' + message);
        // assign the error class name in your custom error (as a shortcut)
        this.name = this.constructor.name;
        // capturing the stack trace keeps the reference to your error class
        Error.captureStackTrace(this, this.constructor);
    }
}
exports.default = FileNotFound;
