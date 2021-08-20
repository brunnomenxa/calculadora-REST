const express = require('express'); //Importa a dependência para o arquivo

const server = express();

server.get('/soma/:x/:y', (req, res) => {
    const x = parseInt(req.params.x);
    const y = parseInt(req.params.y);

    var resultado = x + y;

    return res.json(`Resultado da soma: ${ resultado }`);
});

server.get('/subtracao/:x/:y', (req, res) => {
    const x = parseInt(req.params.x);
    const y = parseInt(req.params.y);

    var resultado = x - y;

    return res.json(`Resultado da subtração: ${ resultado }`);
});

server.get('/multiplicacao/:x/:y', (req, res) => {
    const x = parseInt(req.params.x);
    const y = parseInt(req.params.y);

    var resultado = x * y;

    return res.json(`Resultado da multiplicação: ${ resultado }`);
});

server.get('/divisao/:x/:y', (req, res) => {
    const x = parseInt(req.params.x);
    const y = parseInt(req.params.y);

    var resultado = x / y;

    return res.json(`Resultado da divisão: ${ resultado }`);
});

server.listen(3000);
