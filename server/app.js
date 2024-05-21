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
// var jwt = require('jsonwebtoken');
// var token = jwt.sign({ foo: 'bar' }, 'shhhhh');
// console.log(token);

// const RedisStore = require('connect-redis');
// const session = require('express-session');
// const redis = require("redis");

// // Initialize client.
// let redisClient = redis.createClient()
// redisClient.connect().catch(console.error)


// redisClient.on('error', function (err) {
//     console.log('Could not establish a connection with redis. ' + err);
// });
// redisClient.on('connect', function (err) {
//     console.log('Connected to redis successfully');
// });

// // Initialize store.
// let redisStore = new RedisStore({
//   client: redisClient,
//   prefix: "myapp:",
// })

// // Initialize session storage.
// app.use(
//   session({
//     store: redisStore,
//     resave: false, // required: force lightweight session keep alive (touch)
//     saveUninitialized: false, // recommended: only save session when data exists
//     secret: "keyboard cat",
//   }),
// )

const RedisStore = require("connect-redis").default;
const session = require("express-session");
const {createClient} = require("redis");

// Initialize client.
let redisClient = createClient()
redisClient.connect().catch(console.error)

// Initialize store.
let redisStore = new RedisStore({
  client: redisClient,
  prefix: "myapp:",
})

// Initialize session storage.
app.use(
  session({
    store: redisStore,
    resave: false, // required: force lightweight session keep alive (touch)
    saveUninitialized: false, // recommended: only save session when data exists
    secret: "keyboard cat",
  }),
)