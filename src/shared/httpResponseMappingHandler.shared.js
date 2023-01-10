module.exports = function httpResponseMappingHandlerShared(
  status,
  dados,
  message
) {
  return { status, dados, message };
};
