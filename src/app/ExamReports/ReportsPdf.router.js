const { ReportsPdfController } = require("./ReportsPDF.controller");
const reportsPdfController = new ReportsPdfController();

const reportsRouter = (app)=>{
  app.post("/examReports", (req, res, next)=>{
    reportsPdfController.getGeneratePDF(req, res, next);
  });

  app.post("/listExamReports", (req, res, next)=>{
    reportsPdfController.getFile(req, res, next);
  });
};

module.exports = reportsRouter;