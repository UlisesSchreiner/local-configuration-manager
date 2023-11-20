'use strict';
import FileNotFound from './model/errors';
const fs = require('fs');

class LocalConfigsManager {

    private static instance: LocalConfigsManager;
    private environment: String;
    private baseConfigPath: String;

    public static getInstance(baseConfigPath: String = './config/'): LocalConfigsManager {
        if (!LocalConfigsManager.instance) {
            LocalConfigsManager.instance = new LocalConfigsManager(baseConfigPath);
        }

        return LocalConfigsManager.instance;
    }

    private constructor(baseConfigPath: String) {
        this.environment = process.env.ENVIRONMENT || 'dev'
        this.baseConfigPath = baseConfigPath;
    } 

    private readConfigFile(filePath: string) {
        try {
            return fs.readFileSync(filePath); 
        } catch(erro) {
            throw new FileNotFound(filePath)
        }
    }

    public getConfigFile(name: String = 'default') {
        let filePath = `${this.baseConfigPath}${this.environment}.${name}.json`
        let rawdata = this.readConfigFile(filePath)
        return JSON.parse(rawdata);
    }
}

const instance = LocalConfigsManager.getInstance()
export const getConfigFile = instance.getConfigFile.bind(instance)
