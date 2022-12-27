//dados para teste
const { data:html } = require('../../html.json')
const {data:rx} = require("../../rx.json")  
const generatePdfFromString = require('../util/teste')

const generatePDFromString = require('../util/gemeratePdf') // teste
const createReadStream = require("../util/createReadStream"); // ok


class GeneratePdfService {
  async getGeneratePDF(data) {
      const {filePath}  = await generatePDFromString(data)
      // const { filePath } = await generatePdfFromString(rx)
      console.log(filePath)
      const stream = await createReadStream(filePath);
      return stream
  }
} 

module.exports = { GeneratePdfService };

