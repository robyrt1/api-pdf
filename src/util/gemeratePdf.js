const pdf = require("html-pdf");
const { v4: uuidv4 } = require("uuid");

const generatePdf = (data) => {
  return new Promise((resolve, reject) => {
    const TMP_FILE_PATH = process.env.TMP_FILE_PATH || "./uploads";
    const fileName = `${uuidv4()}.pdf`;
    const filePath = `${TMP_FILE_PATH}/${fileName}`;

    const options = {
      format: "A4",
      orientation: 'portrait',
      margin: "45mm",
      type: 'pdf',
    };
    pdf.create(data, options).toFile(filePath,(error)=>{
        if(error){
            console.log(error.message)
            reject( error.message)
        }
        resolve(filePath)
    });
  });
};


module.exports = generatePdf