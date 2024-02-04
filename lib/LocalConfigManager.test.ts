import assert from "assert";
import { getConfigFile, getRestClientFile } from "./LocalConfigManager";

describe('LocalConfigsManager test', () => {
  it("test getConfigFile when file not exist then throws error", () => {
    assert.throws(() => getConfigFile("nonexistent"));
  });

  it("test getConfigFile when not specific file name then get default file and keys exist", () => {
    const config = getConfigFile();
    assert.ok(config && typeof config === "object");
    assert.ok("test_key" in config);
    assert.equal("test_value", config.test_key);
  });

  it("test getConfigFile when specific file name then get specific file and keys exist", () => {
    const config = getConfigFile("custom");
    assert.ok(config && typeof config === "object");
    assert.ok("test_custom_key" in config);
    assert.equal("test_custom_value", config.test_custom_key);
  });

  it("test getRestClientFile when not specific file name then get default file and keys exist", () => {
    const config = getRestClientFile();
    assert.ok(config && typeof config === "object");
    assert.ok("test_client_key" in config);
    assert.equal("test_client_value", config.test_client_key);
  });
});
