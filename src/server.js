const express =  require("express");
require('dotenv').config()

const router = require("./routers/converterHtml.router");

const app = express();

const server_port = process.env.SERVER_PORT || 3334;

app.use(router)

app.listen(server_port, ()=>{
    console.log(`Server running on port ${server_port}`)
})