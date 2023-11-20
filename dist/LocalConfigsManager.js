'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getConfigFile = void 0;
const errors_1 = __importDefault(require("./model/errors"));
const fs = require('fs');
class LocalConfigsManager {
    static getInstance(baseConfigPath = './config/') {
        if (!LocalConfigsManager.instance) {
            LocalConfigsManager.instance = new LocalConfigsManager(baseConfigPath);
        }
        return LocalConfigsManager.instance;
    }
    constructor(baseConfigPath) {
        this.environment = process.env.ENVIRONMENT || 'dev';
        this.baseConfigPath = baseConfigPath;
    }
    readConfigFile(filePath) {
        try {
            return fs.readFileSync(filePath);
        }
        catch (erro) {
            throw new errors_1.default(filePath);
        }
    }
    getConfigFile(name = 'default') {
        let filePath = `${this.baseConfigPath}${this.environment}.${name}.json`;
        let rawdata = this.readConfigFile(filePath);
        return JSON.parse(rawdata);
    }
}
const instance = LocalConfigsManager.getInstance();
exports.getConfigFile = instance.getConfigFile.bind(instance);
