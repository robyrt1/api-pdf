const { ExpressConfig } = require("./config/expressConfig")
const { EnvironmentShared } = require("./shared/environment.shared");

const expressConfig  = new ExpressConfig()
const environmentShared = new EnvironmentShared()
const serverPort = environmentShared.getEnv("SERVER_PORT");


expressConfig.getServer().set('view engine', 'ejs');
expressConfig.getServer().set('views', './src/templates');

expressConfig.getServer().get('/',(req,res)=>{
    const data = require('../excluir/html.json')
    res.render('./laudos/index',data);
})
 
expressConfig.getServer().listen(serverPort,()=>{
    console.log(`Server running on port ${serverPort}`) 
})
