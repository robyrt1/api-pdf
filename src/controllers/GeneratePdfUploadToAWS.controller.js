const { GeneratePdfUploadToAwsService } = require("../services/GeneratePdfUploadToAWS.service");

class GeneratePdfUploadToAwsController {
  constructor() {
    this.generatePdfUploadToAwsService = new GeneratePdfUploadToAwsService();
  }

  async generate(req, res) {
    try {
      const { html, fileName } = req.body;     
      const result = await this.generatePdfUploadToAwsService.generate(html, fileName);

      res.status(200).json(result);
      
    } catch (err) {
      res.status(500).json({ Error: err.message });
    }
  }

  async getFileFromAWS(req, res ) {
    try {
      const { fileName } = req.body;
      const result = await this.generatePdfUploadToAwsService.getFileFromAWS(fileName);
      
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}

module.exports = { GeneratePdfUploadToAwsController };
