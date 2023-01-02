const { ReportsPdfController } = require("../controllers/ReportsPDF.controller")
const reportsPdfController = new ReportsPdfController()

const reportsRouter = (app)=>{
    app.post('/html', (req, res, next)=>{
        reportsPdfController.getGeneratePDF(req, res, next);
    })
}

module.exports = reportsRouter;