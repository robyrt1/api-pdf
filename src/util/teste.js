const { v4: uuidv4 } = require('uuid');
const html2Pdf = require('html-boilerplate-pdf');

const generatePdfFromString = async (data) => {
  return new Promise((resolve, reject) => {
    const TMP_FILE_PATH = process.env.TMP_FILE_PATH || './uploads';
    const fileName = `${uuidv4()}.pdf`;
    const filePath = `${TMP_FILE_PATH}/${fileName}`;
    html2Pdf()
      .from.string(data)
      .to(filePath, (error) => {
        if (error) {
          reject(error);
        }
        resolve({ filePath: filePath });
      });
  });
};

module.exports = generatePdfFromString