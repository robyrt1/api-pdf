const generatePDFromString = require("../../util/generatePdf");
const createReadStream = require("../../util/createReadStream");
const laudosTemplate = require("../../templates/ExamReports/index");



class ReportsPdfService {
  async getGeneratePDF(data) {
    try {
      const template = laudosTemplate(data);
      const options = {
        format: "A4",
        type: "pdf",
        // border: {
        //   right: "0.1in", // iin = 96px
        //   bottom: "0.1in",
        //   left: "0.1in",
        // },
        zoomFactor: "0.1",
        header: {
          height: "5mm",
          // contents: {
          //   first: ``,
          // },
        },
        footer: {
          height: "10mm",
          // margin: { bottom: "100%" },
          // width: "80mm",
          // contents: {
          //   last: ``,
          // }
        },
      };

      const url_file  = await generatePDFromString(template, options);
      console.log('filePath >>>',url_file);

      return { status: true, dado: url_file, message: `Sucesso` };
    } catch (err) {
      return { statusCode: 500, messagem: err.mensage };
    }
  }
}

module.exports = { ReportsPdfService };
