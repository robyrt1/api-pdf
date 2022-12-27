const { GeneratePdfService } = require("../services/GeneratePDF.service")
class GeneratePdfController { 
    constructor(){
        this.generatePdfService = new GeneratePdfService();
    }

     async pdf(req, res, next){
        try {
            const result = await this.generatePdfService.getGeneratePDF()
            res.setHeader('content-disposition', 'incline; filename="output.pdf');
            res.setHeader('content-type', 'application/pdf');
            result.pipe(res);
            res.status(200).json('sucess')
        } catch (err) {
            res.status(500).json({Error:err.message})
        }
    }
}

module.exports = { GeneratePdfController }