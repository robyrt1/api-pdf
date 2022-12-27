//dados para teste
const { data:html } = require('../../html.json')
const {data:rx} = require("../../rx.json")

const generatePDFromString = require('../util/gemeratePdf') // teste
const createReadStream = require("../util/createReadStream"); // ok


class GeneratePdfService {
  async getGeneratePDF() {
    try {
      const filePath  = await generatePDFromString(rx)
      console.log(filePath)
      const stream = await createReadStream(filePath);
      return stream
    } catch (err) {
      console.log(err.message)
      return err.message
    }
  }
} 

module.exports = { GeneratePdfService };

