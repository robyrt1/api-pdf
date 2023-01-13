const { GeneratePdfUploadToAwsController } = require("../controllers/GeneratePdfUploadToAWS.controller");
const generatePdfUploadToAwsController = new GeneratePdfUploadToAwsController();

const generatePdfUploadToAwsRouter = (app)=>{
  app.post("/generate", (req, res)=>{
    generatePdfUploadToAwsController.generate(req, res);
  });

  app.post("/fetch_file", (req, res)=>{
    generatePdfUploadToAwsController.getFileFromAWS(req, res);
  });
};

module.exports = generatePdfUploadToAwsRouter;