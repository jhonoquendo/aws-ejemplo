/* const http = require('http');

const server = http.createServer((req,res) => [
    res.end('Hello world')
]);

server.listen(3000);
console.log("Server on port 3000"); */

const express = require('express');
const app = express();


app.get('/',(req,res) => res.send("<h1>Hola con express</h1>"));

app.listen(3000);
console.log("Server on port 3000");