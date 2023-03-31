const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
const { allowCors } = require('./utils');

// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares);
server.use(allowCors);

// Use default router
server.use(router);

module.exports = server;
