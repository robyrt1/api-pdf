const pdf = require("html-pdf");
const { v4: uuidv4 } = require("uuid");
const { AwsConfig } = require("../config/awsConfig");
const { EnvironmentShared } = require("../shared/environment.shared");
const mountingFileUrls = require("../shared/mountingFileUrls.shared");

class GeneratePDFromString {
  constructor() {
    this.awsConfig = new AwsConfig();
    this.environmentShared = new EnvironmentShared();
  }
  Generate(data, fileName) {
    return new Promise((resolve, reject) => {
      const options = {
        format: "A4",
        type: "pdf",
        zoomFactor: "0.1",
        header: {
          height: "5mm",
        },
        footer: {
          height: "10mm",
        },
      };
      pdf.create(data, options).toStream(async (error, response) => {
        if (error) {
          console.log(error.message);
          reject(error.message);
        }
        this.awsConfig.execUpload(fileName, response).then((data) => {
          resolve(data);
        });
      });
    });
  }

  getFileBykey(fileName) {
    return new Promise((resolve, reject) => {
      const params = {
        Bucket: "storage-samel",
        EncodingType: "url",
        Prefix: `${fileName}`,
      };

      this.awsConfig.listeObjects(params).then((key) => {
        const url_keys = mountingFileUrls(
          key,
          this.environmentShared.getEnv("URL_FILE_AWS")
        );
        if (url_keys.length === 0)
          reject("[ERROR] - Key/Nome do arquivo invalido!");

        resolve(url_keys);
      });
    });
  }


  generatePdfSaveLocation(data, options, fileNamePdf) {
    return new Promise((resolve, reject) => {
      const TMP_FILE_PATH =
        this.environmentShared("TMP_FILE_PATH") || "./uploads";
      const fileName = `${fileNamePdf}-${uuidv4()}.pdf`;
      const filePath = `${TMP_FILE_PATH}/${fileName}`;

      pdf.create(data, options).toFile(filePath, (error) => {
        if (error) {
          console.log(error.message);
          reject(error.message);
        }
        resolve({ filePath: filePath });
      });
    });
  }
}

module.exports = { GeneratePDFromString };
