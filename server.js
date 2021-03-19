/* const http = require('http');

const server = http.createServer((req,res) => [
    res.end('Hello world')
]);

server.listen(3000);
console.log("Server on port 3000"); */

const express = require('express');
const app = express();


app.get('/',(req,res) => res.send("Hola con express"));

app.listen(3000);
console.log("Server on port 3000");