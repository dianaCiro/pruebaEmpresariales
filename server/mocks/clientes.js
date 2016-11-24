/*jshint node:true*/
module.exports = function(app) {
  var express = require('express');
  var clientesRouter = express.Router();

  var clientes = [
    {
      id_user: 1,
      username: 'juanito',
      email: 'juanito@udea.edu.co',
      password: 'asd456',
      name: 'juan perez',
      role: '2',
      phone: '123456',
      balance: '40000',
      identification: '147852'
    },
    {
      id_user: 2,
      username: 'alejamon',
      email: 'aleja@udea.edu.co',
      password: 'lkj321',
      name: 'alejandra tamayo',
      role: '2',
      phone: '789456',
      balance: '20000',
      identification: '15963'
    }
  ];

  clientesRouter.get('/', function(req, res) {
    res.send({
      'clientes': clientes
    });
  });

  clientesRouter.post('/', function(req, res) {
    //var newCliente = req.body.cliente;
    //console.log(req.body);
    //var newId = clientes.length + 1;
    //newCliente.id_user = newId;
    //clientes.push(newCliente);
    res.send({
      cliente: req.headers
    });
  });

  clientesRouter.get('/:id', function(req, res) {
    res.send({
      'clientes': {
        id: req.params.id
      }
    });
  });

  clientesRouter.put('/:id', function(req, res) {
    res.send({
      'clientes': {
        id: req.params.id
      }
    });
  });

  clientesRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  // The POST and PUT call will not contain a request body
  // because the body-parser is not included by default.
  // To use req.body, run:

  //    npm install --save-dev body-parser

  // After installing, you need to `use` the body-parser for
  // this mock uncommenting the following line:
  //
  //app.use('/api/clientes', require('body-parser').json());
  app.use('/api/clientes', clientesRouter);
};
