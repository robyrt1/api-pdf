const express =  require("express");
require('dotenv').config()

const router = require("./routers/LaudosPdf.router");

const app = express();
app.use(express.json())
const server_port = process.env.SERVER_PORT || 3334;

app.use(router)

app.listen(server_port, ()=>{
    console.log(`Server running on port ${server_port}`)
})