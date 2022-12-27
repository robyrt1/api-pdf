const { GeneratePdfController } = require("../controllers/GeneratePDF.controller")
const generatePdfController = new GeneratePdfController()
const { Router } = require('express')
const router = Router();

router.get('/html', (req, res, next)=>{
    generatePdfController.pdf(req, res, next);
})

module.exports = router;