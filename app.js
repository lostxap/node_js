const http = require('http');

const express = require('express');

const app = express();

app.use((req,res,next) => {
    console.log('in tha middleware');
    next(); //alows the req to continue to next middleware 
});

app.use((req,res,next) => {
    console.log('in tha middleware');
});

const server = http.createServer(app);

server.listen(3000);
