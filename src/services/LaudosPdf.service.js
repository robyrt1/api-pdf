const generatePDFromString = require("../util/generatePdf"); // teste
const createReadStream = require("../util/createReadStream"); // ok
const laudosTemplate = require("../templates/laudos/index");

class LaudosPdfService {
  async getGeneratePDF(data) {
    const template = laudosTemplate(data);

    const htmlWithNewTags = `
        <html>
            <head>
                <style type="text/css">
                    html, body {
                        height: 100%;
                        display: flex!important;
                        font-size: 0.740000em;
                    }

                    .col-12,.teste  {
                        -webkit-transform: scale(0.90);
                            -moz-transform: scale(0.60);
                                transform: scale(0.67);
                        max-width: 100%;
                    }

                </style>    
            </head>
        <body>
            ${template}
        </body>
        </html>`;

    const { filePath } = await generatePDFromString(htmlWithNewTags);
    console.log(filePath);
    const stream = await createReadStream(filePath);
    return stream;
  }
}

module.exports = { LaudosPdfService };
