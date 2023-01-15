const { GeneratePDFromString } = require("../util/generatePdf.util");
const httpResponseMappingHandlerShared = require("../shared/httpResponseMappingHandler.shared");
const { OK, INTERNAL_SERVER_ERROR, BAD_REQUEST } = require("../shared/constants/http.code");
class GeneratePdfUploadToAwsService {
  constructor() {
    this.generatePDFromString = new GeneratePDFromString();
  }
  async generate(html, fileName) {
    try {
      if (typeof html != "string")
        throw httpResponseMappingHandlerShared(
          BAD_REQUEST,
          false,
          [],
          `[ERROR] - Tipo: ${typeof html} invalido, correto é string!`
        );

      const url_file = await this.generatePDFromString.Generate(html, fileName);

      const httpResponseMenssage = "Sucesso na requisição";
      return httpResponseMappingHandlerShared(
        OK,
        true,
        url_file,
        httpResponseMenssage
      );
    } catch (error) {
      return error.statusCode
        ? httpResponseMappingHandlerShared(
          error.statusCode,
          false,
          [],
          error.message
        )
        : httpResponseMappingHandlerShared(
          INTERNAL_SERVER_ERROR,
          false,
          [],
          "[INFO] - Falha no servidor!"
        );
    }
  }

  async generateMultiples(data) {
    try {
      const result = [];

      const fileName = data[0].fileName;
      for (let html in data[0].dados) {
        const htmls = data[0].dados[html].html;
        const urls = await this.generatePDFromString.Generate(htmls, fileName);
        result.push(urls);
      }

      const httpResponseMenssage = "Sucesso na requisição";
      return httpResponseMappingHandlerShared(
        true,
        result,
        httpResponseMenssage
      );
    } catch (error) {
      return httpResponseMappingHandlerShared(INTERNAL_SERVER_ERROR,false, [], error);
    }
  }

  async getFileBykey(key) {
    try {
      const data = await this.generatePDFromString.getFileBykey(key);

      const httpResponseMenssage = "[INFO] - Sucesso ao listar arquivos pdf";
      return httpResponseMappingHandlerShared(true, data, httpResponseMenssage);
    } catch (error) {
      console.log(error);
      return httpResponseMappingHandlerShared(false, [], error);
    }
  }
}

module.exports = { GeneratePdfUploadToAwsService };
