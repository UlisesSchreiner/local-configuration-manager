export default class FileNotFound extends Error {
    constructor(path: string, message?: string);
}
