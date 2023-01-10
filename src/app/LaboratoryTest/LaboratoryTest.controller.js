const { LaboratoryTestService } = require("./LaboratoryTest.service");
class LaboratoryTestController {
  constructor(){
    this.laboratoryTest = new LaboratoryTestService(); 
  }
  async getGeneratePDF(req, res) {
    try {
      const result = await this.laboratoryTest.getGeneratePDF(req.body);
      // res.setHeader("content-disposition", 'incline; filename="output.pdf');
      // res.setHeader("content-type", "application/pdf");
      // result.pipe(res);
      // fs.unlinkSync(path.resolve(__dirname,'../../', result.dado))

      res.status(200).json(result);
    } catch (err) {
      res.status(500).json({ Error: err.message });
    }
  }
}

module.exports = { LaboratoryTestController };