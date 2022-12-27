const fs = require('fs')
const createReadStream = async (filePath) => {
    try {
      return fs.createReadStream(filePath);
    } catch (error) {
      throw error;
    }
  };

  module.exports = createReadStream