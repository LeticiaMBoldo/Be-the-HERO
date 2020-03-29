const express = require('express');

const OngController = require('./controllers/OngController');
const incidentController = require('./controllers/incidentController');
const profileController = require('./controllers/profileController');
const sessionController = require('./controllers/sessionController');

const routes = express.Router();

// criando um login
routes.post('/session', sessionController.create);

//rotas de ongs
routes.get('/ongs', OngController.index); 
routes.post('/ongs', OngController.create);

// casos especiais de casos
routes.get('/profile', profileController.index);

//rotas de casos
routes.get('/incidents', incidentController.index);
routes.post('/incidents', incidentController.create);
routes.delete('/incidents/:id', incidentController.delete);

module.exports = routes;
