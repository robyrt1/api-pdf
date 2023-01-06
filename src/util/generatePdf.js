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

const generatePdf = (data, options) => {
  return new Promise((resolve, reject) => {
    // const TMP_FILE_PATH = environmentShared.getEnv("TMP_FILE_PATH") || "./uploads";
    // const fileName = `${uuidv4()}.pdf`;
    // const filePath = `${TMP_FILE_PATH}/${fileName}`;

    pdf.create(data, options).toStream(async (error, response) => {
      if (error) {
        console.log(error.message);
        reject(error.message);
      }
      const uploadParams = {
        Bucket: "testebucketrobert",
        ACL: "public-read",
        Key: `${uuidv4()}`,
        Body: response,
        ContentType: "application/pdf",
      };

      s3.upload(uploadParams, function (err, data) {
        if (err) {
            console.log("Error", err);
        } if (data) {
            resolve(data.Location);
        }
    });
    });
  });
};

//função que gerar o pdf e armazena na pasta uploads
const file = (data, options) => {
  return new Promise((resolve, reject) => {
    const TMP_FILE_PATH = process.env.TMP_FILE_PATH || "./uploads";
    const fileName = `${uuidv4()}.pdf`;
    const filePath = `${TMP_FILE_PATH}/${fileName}`;

  
    pdf.create(data, options).toFile(filePath,(error)=>{
        if(error){
            console.log(error.message)
            reject( error.message)
        }
        resolve({filePath: filePath})
    });
  });
};

module.exports = generatePdf;







