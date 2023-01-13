const mountingFileUrls = (fileNames, url) => {
  const data = [];

  for(const prop in fileNames){
    const url_file = url.replace("fileName", fileNames[prop].Key);
    data.push(url_file);
  }
  return data;
};

module.exports = mountingFileUrls;