const generatePDFromString = require("../../util/generatePdf");
class LaboratoryTestService {
  async getGeneratePDF(data) {
    try {
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

      const url_file  = await generatePDFromString(data, options);
      console.log('"filePath >>>"',url_file);

      return { status: true, dado: url_file, message: `Sucesso` };
    } catch (error) {
      return { status: false, messagem: error.mensage };
    }
  }
}

module.exports = { LaboratoryTestService };