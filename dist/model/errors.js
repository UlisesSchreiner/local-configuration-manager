"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileNotFound = void 0;
class FileNotFound extends Error {
    constructor(path, message = "Error config file not found") {
        super(path + " - " + message);
        this.name = this.constructor.name;
        Error.captureStackTrace(this, this.constructor);
    }
}
exports.FileNotFound = FileNotFound;
