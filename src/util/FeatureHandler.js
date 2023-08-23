const getAllFiles = require("./get-all-files");

class FeatureHandler {
  constructor(instance, featuresDir, client) {
    this.readFiles(instance, featuresDir, client);
  }

  async readFiles(instance, featuresDir, client) {
    const files = getAllFiles(featuresDir);

    for (const file of files) {
      const func = require(file);
      if (func instanceof Function) {
        await func(instance, client);
      }
    }
  }
}

module.exports = FeatureHandler;

/**
 * @Info
 * Made by CodeCommander#1337
 * @Info
 * Made for Code Commander Sales
 * @Info
 * Must Give Credit
 * @Info
 * support server - https://ccw.vervehosting.co.uk/discord
 * @Info
 */
