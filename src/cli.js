const path = require('path');
const yargs = require('yargs');

const startAnalysis = require('./main');

module.exports = function cli() {
  const configFlags = yargs
    .option('config', {
      alias: 'c',
      type: 'string',
      default: 'optimus.config.js',
      description: 'path to configuration file',
    })
    .parse();
  const configPath = configFlags.c || configFlags.config;

  let config = {};

  try {
    config = require(path.resolve(configPath));
  } catch {
    throw new ReferenceError(`\n\x1b[31m[Error]\x1b[0m: Cannot find module ${configPath}\n`);
  }

  startAnalysis(config);
};
