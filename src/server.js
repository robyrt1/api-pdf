const { ExpressConfig } = require("./config/expressConfig")
const { EnvironmentShared } = require("./shared/environment.shared");

const expressConfig  = new ExpressConfig()
const environmentShared = new EnvironmentShared()
const serverPort = environmentShared.getEnv("SERVER_PORT");


expressConfig.getServer().listen(serverPort,()=>{
    console.log(`Server running on port ${serverPort}`) 
})
