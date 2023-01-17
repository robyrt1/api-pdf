const aws = require("aws-sdk");
const { v4: uuidv4 } = require("uuid");
const { EnvironmentShared } = require("../shared/environment.shared");
class AwsConfig {
  constructor() {
    this.environmentShared = new EnvironmentShared();
    if (!AwsConfig._instance) AwsConfig._instance = this;

    this.connect();
  }

  getInstance() {
    return AwsConfig._instance;
  }

  connect() {
    if (!this.getInstance().s3) {
      this.getInstance().s3 = new aws.S3({
        accessKeyId: this.environmentShared.getEnv("AWS_ACCESS_KEY_ID"),
        secretAccessKey: this.environmentShared.getEnv("AWS_SECRET_ACCESS_KEY"),
        region: this.environmentShared.getEnv("AWS_DEFAULT_REGION"),
      });
      console.log("[INFO] - AWS s3 is connected");
    }
  }

  getConnection() {
    return this.getInstance().s3;
  }

  execUpload(fileName, response) {
    return new Promise((resolve, reject) => {
      const params = {
        Bucket: "storage-samel",
        ACL: "public-read",
        Key: `${fileName}-${uuidv4()}`,
        Body: response,
        ContentType: "application/pdf",
      };
      this.getConnection().upload(params, function (err, data) {
        if (err) {
          reject(err);
        }
        resolve(data.Location);
      });
    });
  }

  listeObjects(params) {
    return new Promise((resolve, reject)=>{
      this.getConnection().listObjectsV2(params, function(err, data){
        if(err){
          reject(err);
        }
        resolve(data.Contents);
      });
    });
  }
}
module.exports = { AwsConfig };
