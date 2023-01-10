const {LaboratoryTestController} = require("./LaboratoryTest.controller");
const laboratoryTestController = new LaboratoryTestController();

const router = (app)=>{
  app.post("/laboratoryTest", (req, res, next)=>{
    laboratoryTestController.getGeneratePDF(req,res,next);
  });
};

module.exports =router ;