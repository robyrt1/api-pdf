
const { BAD_REQUEST } = require("../constants/http.code");
class JoiValidator {
  validate(schema, payload){
    const { value, error } = schema.validate(payload);
    if(error) throw { statusCode: BAD_REQUEST, message: error.details[0].message};
    return value;
  }
}

module.exports = { JoiValidator };