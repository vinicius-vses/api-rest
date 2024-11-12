const express = require('express');
const clientes = require('./clientesRoute.js');

module.exports = app => {
 app.use(
    express.json(),
    clientes,
 );   
};