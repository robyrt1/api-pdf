const generatePDFromString = require("../util/generatePdf");
const createReadStream = require("../util/createReadStream");
const laudosTemplate = require("../templates/Reports/index");
const { OK, INTERNAL_SERVER_ERROR } = require("../shared/constants/http.code");
class ReportsPdfService {
  async getGeneratePDF(data) {
    try {
      const template = laudosTemplate(data);

      const htmlWithNewTags = `
          <html>
              <head>
                  <style>
                      html, body {
                          font-size: 0.740000em;
                      }
                  </style>    
              </head>
          <body >
              <div >
                  ${template}
              <div>
          </body>
          </html>`;

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
      const { filePath } = await generatePDFromString(htmlWithNewTags, options);
      console.log(filePath);
      const stream = await createReadStream(filePath);
      return stream;
    } catch (err) {
      return { statusCode: INTERNAL_SERVER_ERROR, messagem: err.mensage };
    }
  }
}

module.exports = { ReportsPdfService };
