const express = require ("express");
const morgan = require("morgan");
const routes = require("./routes/index")
const server = express();

server.use(express.json({limit:'50mb'}));
server.use(express.urlencoded({limit:'50mb', extended:true}))
server.use(morgan("dev"));
server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); // update to match the domain you will make the request from
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
  });



  
server.use("/", routes);


module.exports = server;
