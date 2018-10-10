'use strict';

const Hapi = require('hapi');
const config = require('config');
const Joi = require('joi');

const routes = require('./api/routes');
const port = config.get('api.port');
const host = config.get('api.host');

// const server = Hapi.server({
//     port: 3000,
//     host: 'localhost'
// });

const server = new Hapi.Server({
  port,
  host
});

const options = {
  ops: {
      interval: 1000
  },
  reporters: {
    myConsoleReporter: [{
      module: 'good-squeeze',
      name: 'Squeeze',
      args: [{ log: '*', response: '*' }]
    }, {
      module: 'good-console'
    }, 'stdout']
  }
}

server.ext({
  type: 'onRequest',
  method: function (request, h) {

      // Change all requests to '/test'

      server.log('info', 'onRequest');
      // request.setUrl('/test');
      return h.continue;
  }
});

for (var route in routes) {
	server.route(routes[route]);
}

// server.route({
//   method: 'GET',
//   path: '/',
//   handler: (request, h) => {

//       return 'Hello, world!';
//   }
// });

// server.route({
//   method: 'GET',
//   path: '/etna/{etnaMessage?}',
//   handler: (request, h) => {

//     return request.params;
//   }
// });

// server.route({
//   method: ['PUT', 'POST'],
//   path: '/etna',
//   config: {
//     payload: {
//       parse: true
//     },
//     validate: {
//       payload: Joi.object({
//         user: Joi.number().min(2),
//         test: Joi.bool()
//       })
//     }
//   },
//   handler: (request, h) => {

//       // return config.get('api');
//       return request.payload;
//   }
// });

const init = async () => {

  await server.register({
    plugin: require('good'),
    options,
  });

  await server.start();
  server.log('info', `Server running at: ${server.info.uri}`);
};

process.on('unhandledRejection', (err) => {

    server.log('error', err);
    process.exit(1);
});

init();