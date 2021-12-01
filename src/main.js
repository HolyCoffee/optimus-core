const { consoleError } = require('./constants');
const { getFilesList, startPlugins } = require('./files');

function startAnalysis(config) {
  const plugins = config.plugins || [];

  if (!plugins.length) {
    throw new ReferenceError(`${consoleError}: You should add a plugin in optimus config!`);
  }

  const filesList = getFilesList(config.includes || []);

  for (const filePath of filesList) {
    startPlugins(filePath, config);
  }
}

module.exports = startAnalysis;
