const fs = require('fs');

const { getConfig, getFilesList } = require('./config');

async function startAnalysis() {
  const config = getConfig();
  const plugins = config.plugins || [];

  if (!plugins.length) {
    console.warn(`\x1b[33m[Warn]\x1b[0m: You should add a plugin in optimus config!`);
    return;
  }

  const filesList = await getFilesList(config.includes || []);

  for (const filePath of filesList) {
    fs.readFile(filePath, 'utf8', (error, data) => {
      if (error) {
        console.error(`\n\x1b[31m[Error]\x1b[0m: ${error}`);
      }

      fileAnalysis(plugins)(data);
    });
  }
}

function fileAnalysis(plugins) {
  return (file) => {
    for (const plugin of plugins) {
      plugin(file);
    }
  };
}

module.exports = startAnalysis;
