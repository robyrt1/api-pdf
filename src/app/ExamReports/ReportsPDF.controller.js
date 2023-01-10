const { ReportsPdfService } = require("./ReportsPdf.service");
class ReportsPdfController {
  constructor() {
    this.reportsPdfService = new ReportsPdfService();
  }

  async getGeneratePDF(req, res) {
    try {
      const { html, fileName } = req.body;     
      const result = await this.reportsPdfService.GeneratePDF(html, fileName);

      res.status(200).json(result);
      
    } catch (err) {
      res.status(500).json({ Error: err.message });
    }
  }

  async getFile(req, res) {
    try {
      const { fileName } = req.body;
      const result = await this.reportsPdfService.getFile(fileName);
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}

module.exports = { ReportsPdfController };
