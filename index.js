const { join } = require("path");

const { fileListFromPath } = require('filelist-utils');

const path = join(__dirname, 'data');

module.exports = {
  jcamp: () =>fileListFromPath(path),
};
