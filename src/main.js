const path = require('path');
const { Worker } = require('worker_threads');

const { getFilesList } = require('./helpers');
const { consoleError } = require('./constants');

function startAnalysis(config) {
  const plugins = config.plugins || [];

  if (!plugins.length) {
    throw new ReferenceError(`${consoleError}: You should add a plugin in optimus config!`);
  }

  const filesList = getFilesList(config.includes || []);

  for (const filePath of filesList) {
    //eslint-disable-next-line
    console.log(plugins);
    const worker = new Worker(path.resolve(__dirname, './worker.js'), {
      workerData: {
        filePath,
      },
      execArgv: [...process.execArgv, '--unhandled-rejections=strict'],
    });

    worker.on('error', (error) => {
      console.log(`${consoleError}: Worker[${worker.threadId}] stopped with error - "${error}"`);
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
