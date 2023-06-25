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
      pdf.create(data, options).toStream((error, response) => {
        if (error) {
          console.log(error.message);
          reject(error.message);
        }
        if (response == undefined) {
          reject("Error no servidor");
        }
        resolve({response:response,filename:fileName});
      });
    });
  }

  async getFileBykey(fileName) {
    try {
      const params = {
        Bucket: "storage-samel",
        EncodingType: "url",
        Prefix: `${fileName}`,
      };

      const key = await this.awsConfig.listeObjects(params);
      const url_keys = mountingFileUrls(
        key,
        this.environmentShared.getEnv("URL_FILE_AWS")
      );
      return url_keys;
    } catch (error) {
      return error;
    }
  }

  generatePdfSaveLocation(data, fileNamePdf) {
    return new Promise((resolve, reject) => {
      const TMP_FILE_PATH =
        this.environmentShared.getEnv("TMP_FILE_PATH") || "./uploads";
      const fileName = `${fileNamePdf}-${uuidv4()}.pdf`;
      const filePath = `${TMP_FILE_PATH}/${fileName}`;
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
