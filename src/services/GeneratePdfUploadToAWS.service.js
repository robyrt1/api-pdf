const { GeneratePDFromString } = require("../util/generatePdf.util");
const httpResponseMappingHandlerShared = require("../shared/httpResponseMappingHandler.shared");
class GeneratePdfUploadToAwsService {
  constructor() {
    this.generatePDFromString = new GeneratePDFromString();
  }
  async generate(html,fileName) {
    try {
      const options = {
        format: "A4",
        type: "pdf",
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
      console.log(`[URL_FILE] - ${url_file} --> ${new Date().toLocaleDateString("pt-br",{dateStyle:"long"})}`);

      const httpResponseMenssage = "Sucesso na requisição";
      return httpResponseMappingHandlerShared(
        true,
        url_file,
        httpResponseMenssage
      );
      
    } catch (error) {
      const httpResponseMenssage = "[Error] - Falha no Servidor"; 
      return httpResponseMappingHandlerShared(false,[],httpResponseMenssage);
    }
  }

  async getFileFromAWS(fileName) {
    try {
      const data = await this.generatePDFromString.getFileFromAWS(fileName);

      if (!data) {
        throw httpResponseMappingHandlerShared(
          false,
          [],
          "Erro ao listar arquivos pdf"
        );
      }

      const httpResponseMenssage = "Sucesso ao listar arquivos pdf";
      return httpResponseMappingHandlerShared(true, data, httpResponseMenssage);

    } catch (error) {
      console.log(error);
      const httpResponseMenssage = "[Error] - Falha no Servidor"; 
      return httpResponseMappingHandlerShared(false, [], httpResponseMenssage);
    }
  }
}

module.exports = { GeneratePdfUploadToAwsService };
