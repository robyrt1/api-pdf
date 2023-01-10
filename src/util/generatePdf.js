const pdf = require("html-pdf");
const { v4: uuidv4 } = require("uuid");
const { EnvironmentShared } = require("../shared/environment.shared");
const environmentShared = new EnvironmentShared();
const aws = require("aws-sdk");

const s3 = new aws.S3({
  accessKeyId: environmentShared.getEnv("AWS_ACCESS_KEY_ID"),
  secretAccessKey: environmentShared.getEnv("AWS_SECRET_ACCESS_KEY"),
  region: environmentShared.getEnv("AWS_DEFAULT_REGION"),
});

class GeneratePDFromString {
  Generate(data, options, fileName) {
    return new Promise((resolve, reject) => {
      pdf.create(data, options).toStream(async (error, response) => {
        if (error) {
          console.log(error.message);
          reject(error.message);
        }
        const params = {
          Bucket: "storage-samel",
          ACL: "public-read",
          Key: `${fileName}-${uuidv4()}`,
          Body: response,
          ContentType: "application/pdf",
        };
        s3.upload(params, function (err, data) {
          if (err) {
            console.log("Error", err);
          }
          resolve(data.Location);
        });
      });
    });
  }

  getFile(fileName) {
    return new Promise((resolve, reject) => {

      const params = {
        Bucket: "storage-samel",
        EncodingType: "url",
        Prefix: `${fileName}`
      };

      s3.listObjectsV2(params, (error, data) => {
        if (error) {
          console.log(error);
          reject(error);
        }

        const key = data.Contents[0].Key;
        const url_file = `${environmentShared.getEnv("URL_FILE_AWS").replace("fileName", key)}`;
        
        resolve(url_file);
      });
    });
  }
}

module.exports = { GeneratePDFromString };
