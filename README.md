# Local properties manager

## Introduction
properties-manager is a tool to open properties files in local applications. This allows you to have several general configuration files and configurations for rest clients separated by runtime environment. The tool will take the corresponding file depending on the execution environment in which it is located.

## Installation
To install the library, use the following command:

```sh
npm install properties-manager
```

## Usage
### getConfigFile

> Note: Default without environment variable

`./config/dev.default.json`
```json
{
    "test_key": "test_value"
}
```
```typescript
 const config = getConfigFile();
 console.log(config.test_key)
```

> Note: Custom without environment variable

`./config/dev.custom.json`
```json
{
    "test_key": "test_value"
}
```
```typescript
 const config = getConfigFile('custom');
 console.log(config.test_key)
```

> Note: Default with environment variable

`./config/prod.default.json`
```json
{
    "test_key": "test_value"
}
```
`ENVIRONMENT=prod`
```typescript
 const config = getConfigFile();
 console.log(config.test_key)
```

> Note: Custom with environment variable

`./config/prod.custom.json`
```json
{
    "test_key": "test_value"
}
```
`ENVIRONMENT=prod`
```typescript
 const config = getConfigFile('custom');
 console.log(config.test_key)
```

### getRestClientFile

> Note: Default without environment variable

`./config/dev.rest_client.json`
```json
{
    "test_key": "test_value"
}
```
```typescript
 const config = getRestClientFile();
 console.log(config.test_key)
```

> Note: Default with environment variable

`./config/prod.rest_client.json`
```json
{
    "test_key": "test_value"
}
```
`ENVIRONMENT=prod`
```typescript
 const config = getRestClientFile();
 console.log(config.test_key)
```

## Contributions
If you wish to contribute to the library, please feel free to create a fork and pull request