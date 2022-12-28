const { LaudosPdfService } = require("../services/LaudosPdf.service")
const {data:rx} = require("../../html.json")  
class GeneratePdfController { 
    constructor(){
        this.laudosPdfService = new LaudosPdfService();
    }

     async getGeneratePDF(req, res, next){
        try {
            const { data } = req.body
            const result = await this.laudosPdfService.getGeneratePDF(rx)
            res.setHeader('content-disposition', 'incline; filename="output.pdf');
            res.setHeader('content-type', 'application/pdf');
            result.pipe(res);
        } catch (err) {
            res.status(500).json({Error:err.message})
        }
    }
}

module.exports = { GeneratePdfController }
