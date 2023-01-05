const { ReportsPdfService } = require("./ReportsPdf.service");
const fs  =require('fs')
const path = require('path')
class ReportsPdfController {
  constructor() {
    this.reportsPdfService = new ReportsPdfService();
  }

  async getGeneratePDF(req, res, next) {
    try {
      const result = await this.reportsPdfService.getGeneratePDF(req.body);
      // res.setHeader("content-disposition", 'incline; filename="output.pdf');
      // res.setHeader("content-type", "application/pdf");
      // result.pipe(res);
      // fs.unlinkSync(path.resolve(__dirname,'../../', result.dado))

      res.status(200).json(result)
    } catch (err) {
      res.status(500).json({ Error: err.message });
    }
  }
}

module.exports = { ReportsPdfController };
 