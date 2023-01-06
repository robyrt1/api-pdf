const { ReportsPdfController } = require("./ReportsPDF.controller")
const reportsPdfController = new ReportsPdfController()

const reportsRouter = (app)=>{
    app.post('/examReports', (req, res, next)=>{
        reportsPdfController.getGeneratePDF(req, res, next);
    })
}

module.exports = reportsRouter;