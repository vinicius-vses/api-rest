const express = require('express');
const routes = require('./routes')

const app = express ();
routes(app);

module.exports = app;

/*app.get('/teste', (req, res) => {
    res
        .status(200)
        .send({ mensagem: 'Boas-vindas à API' });
});*/

