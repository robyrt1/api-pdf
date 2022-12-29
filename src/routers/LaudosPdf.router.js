const { GeneratePdfController } = require("../controllers/LaudosPDF.controller")
const generatePdfController = new GeneratePdfController()

const laudosRouter = (app)=>{
    app.post('/html', (req, res, next)=>{
        generatePdfController.getGeneratePDF(req, res, next);
    })
}
// router.post('/html', (req, res, next)=>{
//     generatePdfController.getGeneratePDF(req, res, next);
// })

module.exports = laudosRouter;