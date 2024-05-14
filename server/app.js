/*------------------------important files------------------------*/
require('dotenv').config();

/*------------------------server creation------------------------*/
const http = require('http');
const express = require('express');
const app = express();
http.createServer(app.listen(process.env.port));

/*------------------------Middlewares------------------------*/
app.use(express.json());

/*------------------------Routers------------------------*/
const userRoutes = require('./src/routes/v1/userRoutes');


/*------------------------Entry points------------------------*/
try{
    app.use('/user',userRoutes);
}catch(e){
    res.send("Sorry unable process now");
}


/*------------------------Test------------------------*/
var jwt = require('jsonwebtoken');
var token = jwt.sign({ foo: 'bar' }, 'shhhhh');
console.log(token);