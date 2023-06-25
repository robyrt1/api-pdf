const { GeneratePDFromString } = require("../util/generatePdf.util");
const httpResponseMappingHandlerShared = require("../shared/httpResponseMappingHandler.shared");
const createReadStream = require("../util/createReadStream.util");
const {
  OK,
  INTERNAL_SERVER_ERROR,
  BAD_REQUEST,
} = require("../shared/constants/http.code");
const { JoiValidator } = require("../shared/validators/joi.validator");
const {
  generateValidatorJoiSchema,
} = require("../shared/validators/genreate.validator.schema");
const { AwsConfig } = require("../config/awsConfig");
class GeneratePdfUploadToAwsService {
  constructor() {
    this.generatePDFromString = new GeneratePDFromString();
    this.awsConfig = new AwsConfig();
    this.joiValidator = new JoiValidator();
  }
  async generate(html, fileName) {
    try {
      this.joiValidator.validate(generateValidatorJoiSchema, {
        html,
        fileName,
      });

      if (typeof html != "string")
        throw httpResponseMappingHandlerShared(
          BAD_REQUEST,
          false,
          [],
          `[ERROR] - Tipo: ${typeof html} invalido, correto é string!`
        );

      const {response, filename} = await this.generatePDFromString.Generate(html, fileName);
      
      const url_file = await this.awsConfig.execUpload(filename, response);
      if (!url_file)
        throw httpResponseMappingHandlerShared(
          BAD_REQUEST,
          false,
          [],
          `[ERROR] - falha ao gera link`
        );
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

      for (let html in data[0].dados) {
        const htmls = data[0].dados[html].html;
        const fileName = data[0].dados[html].fileName;
        const link = await this.generatePDFromString.Generate(htmls, fileName);
        result.push(link);
      }

      const httpResponseMenssage = "[INFO] - Sucesso na requisição!";
      return httpResponseMappingHandlerShared(
        OK,
        true,
        result,
        httpResponseMenssage
      );
    } catch (error) {
      return httpResponseMappingHandlerShared(
        INTERNAL_SERVER_ERROR,
        false,
        [],
        error
      );
    }
  }

  async generateSaveLacation(html, fileName) {
    try {
      if (typeof html != "string")
        throw httpResponseMappingHandlerShared(
          BAD_REQUEST,
          false,
          [],
          `[ERROR] - Tipo: ${typeof html} invalido, correto é string!`
        );
      const { filePath } =
        await this.generatePDFromString.generatePdfSaveLocation(html, fileName);
      console.log(filePath);
      const stream = await createReadStream(filePath);
      return stream;
    } catch (error) {
      console.log(error);
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
          error
        );
    }
  }

  async getFileBykey(key) {
    try {
      const data = await this.generatePDFromString.getFileBykey(key);

      if (data.length === 0)
        throw httpResponseMappingHandlerShared(
          400,
          false,
          [],
          `[ERROR] - Key/Nome do arquivo invalido!`
        );
      const httpResponseMenssage = "[INFO] - Sucesso ao listar arquivos pdf";
      return httpResponseMappingHandlerShared(
        OK,
        true,
        data,
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
}

module.exports = { GeneratePdfUploadToAwsService };
