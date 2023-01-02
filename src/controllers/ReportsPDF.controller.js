const { ReportsPdfService } = require("../services/ReportsPdf.service");
const rx =require("../../excluir/rx.json")
class ReportsPdfController {
  constructor() {
    this.reportsPdfService = new ReportsPdfService();
  }

  async getGeneratePDF(req, res, next) {
    try {
      const result = await this.reportsPdfService.getGeneratePDF(req.body);
      res.setHeader("content-disposition", 'incline; filename="output.pdf');
      res.setHeader("content-type", "application/pdf");
      result.pipe(res);
    } catch (err) {
      res.status(500).json({ Error: err.message });
    }
  }
}

module.exports = { ReportsPdfController };
 