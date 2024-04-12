const http = require('http');
const request = require('request');

http.createServer((req, res) => {
    request('https://api.agify.io/?name=meelad', (error, response, body) => {
        console.log(body);
    });
}).listen(8080);

//Maria Julia Vieira Roque RGM:5933605955
