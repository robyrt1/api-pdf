const { GeneratePdfService } = require("../services/GeneratePDF.service")
const {data:rx} = require("../../rx.json")  
class GeneratePdfController { 
    constructor(){
        this.generatePdfService = new GeneratePdfService();
    }

     async getGeneratePDF(req, res, next){
        try {
            const result = await this.generatePdfService.getGeneratePDF(rx)
            res.setHeader('content-disposition', 'incline; filename="output.pdf');
            res.setHeader('content-type', 'application/pdf');
            result.pipe(res);
        } catch (err) {
            res.status(500).json({Error:err.message})
        }
    }
}

module.exports = { GeneratePdfController }
