const { GeneratePDFromString } = require("../../util/generatePdf");
const httpResponseMappingHandlerShared = require("../../shared/httpResponseMappingHandler.shared");
class ReportsPdfService {
  constructor() {
    this.generatePDFromString = new GeneratePDFromString();
  }
  async GeneratePDF(html,fileName) {
    try {
      // const fileName = "";
      const options = {
        format: "A4",
        type: "pdf",
        //   right: "0.1in", // iin = 96px
        //   bottom: "0.1in",
        //   left: "0.1in",
        // },
        zoomFactor: "0.1",
        header: {
          height: "5mm",
        },
        footer: {
          height: "10mm",
        },
      };

      const url_file = await this.generatePDFromString.Generate(
        html,
        options,
        fileName
      );
      console.log("filePath >>>", url_file , '">>"', new Date());

      const httpResponseMenssage = "Sucesso na requisição";
      return httpResponseMappingHandlerShared(
        true,
        url_file,
        httpResponseMenssage
      );
    } catch (error) {
      return { statusCode: 500, messagem: error.mensage };
    }
  }

  async getFile(fileName) {
    try {
      const data = await this.generatePDFromString.getFile(fileName);

      if (!data) {
        throw httpResponseMappingHandlerShared(
          false,
          [],
          "Erro ao listar Laudos Exames"
        );
      }

      const httpResponseMenssage = "Sucesso ao listar Laudos Exames!";
      return httpResponseMappingHandlerShared(true, data, httpResponseMenssage);

    } catch (error) {
      console.log(error);
      return httpResponseMappingHandlerShared(false, [], error);
    }
  }
}

module.exports = { ReportsPdfService };
