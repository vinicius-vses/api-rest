const { Router } = require('express');
const ClienteController = require('../controllers/ClienteController.js');
const { routes } = require('../app.js');

const clienteController = new ClienteController();

const router = Router();

router.get('/clientes', (req, res) => clienteController.getAll(req, res));
// route.get('/clientes/:id', (req, res) => clienteController.pegaUmPorId(req, res));
// route.post('/clientes/:id', (req, res) => clienteController.criaNovo(req, res));
// route.put('/clientes/:id', (req, res) => clienteController.atualiza(req, res));
// route.delete('/clientes/:id', (req, res) => clienteController.exclui(req, res));

module.exports = router;

//npx sequelize-cli model:generate --name Cliente --attributes nomeCompleto:string,telefone:string,email:string,enderecoPrincipal:string
