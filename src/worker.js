const { workerData } = require('worker_threads');
const { stat, readFile } = require('fs/promises');

(async () => {
  try {
    const fileStat = await stat(workerData.filePath);
    const fileData = await readFile(workerData.filePath, 'utf8');

    // for (const plugin of workerData.plugins) {
    //   plugin(fileStat, fileData);
    // }
  } catch (error) {
    throw error;
  }
})();
