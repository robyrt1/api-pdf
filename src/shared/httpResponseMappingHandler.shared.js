module.exports = function httpResponseMappingHandlerShared(
  statusCode,
  status,
  dados,
  message
) {
  return { statusCode,status, dados, message };
};
