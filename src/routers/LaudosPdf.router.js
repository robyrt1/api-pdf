const { GeneratePdfController } = require("../controllers/LaudosPDF.controller")
const generatePdfController = new GeneratePdfController()
const { Router } = require('express')


const router = Router();

router.post('/html', (req, res, next)=>{
    generatePdfController.getGeneratePDF(req, res, next);
})

module.exports = router;