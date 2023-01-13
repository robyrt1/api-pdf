const pdf = require("html-pdf");
const { v4: uuidv4 } = require("uuid");
const aws = require("aws-sdk");

const mountingFileUrls = require("../shared/mountingFileUrls.shared");
const { EnvironmentShared } = require("../shared/environment.shared");
const environmentShared = new EnvironmentShared();

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

  getFileFromAWS(fileName) {
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

        const key = data.Contents;
        const url_files = mountingFileUrls(key, environmentShared.getEnv("URL_FILE_AWS"));
        
        resolve(url_files);
      });
    });
  }


  generatePdfSaveLocation(data,options, fileNamePdf){
    return new Promise((resolve, reject) => {
      const TMP_FILE_PATH = process.env.TMP_FILE_PATH || "./uploads";
      const fileName = `${fileNamePdf}-${uuidv4()}.pdf`;
      const filePath = `${TMP_FILE_PATH}/${fileName}`;
  
      pdf.create(data, options).toFile(filePath,(error)=>{
        if(error){
          console.log(error.message);
          reject( error.message);
        }
        resolve({filePath: filePath});
      });
    });
  }
}

module.exports = { GeneratePDFromString };
