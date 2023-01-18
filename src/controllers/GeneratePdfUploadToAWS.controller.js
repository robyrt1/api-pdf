const {
  GeneratePdfUploadToAwsService,
} = require("../services/GeneratePdfUploadToAWS.service");

class GeneratePdfUploadToAwsController {
  constructor() {
    this.generatePdfUploadToAwsService = new GeneratePdfUploadToAwsService();
  }

  async generate(req, res) {
    try {
      const { html, fileName } = req.body;
      const result = await this.generatePdfUploadToAwsService.generate(
        html,
        fileName
      );
      return res.status(result.statusCode).json(result);
    } catch (err) {
      return res.status(500).json({ Error: err.message });
    }
  }

  async generateMultiples(req, res) {
    try {
      const result = await this.generatePdfUploadToAwsService.generateMultiples(
        req.body
      );
      return res.status(result.statusCode).json(result);
    } catch (err) {
      return res.status(500).json({ Error: err.message });
    }
  }

  async getFileFromAWS(req, res) {
    try {
      const { key } = req.body;
      const result = await this.generatePdfUploadToAwsService.getFileBykey(key);
      return res.status(result.statusCode).json(result);
    } catch (error) {
      return res.status(500).json(error);
    }
  }
}

module.exports = { GeneratePdfUploadToAwsController };
