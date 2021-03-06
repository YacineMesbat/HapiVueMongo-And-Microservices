var authController = require('../controllers/authentification');
// var crimeValidate = require('../validate/crimes');
module.exports = [
  {
    method: 'POST',
		path: '/api/login',
		config : {
			handler: authController.login,
			cors: {
				origin: ['*'],
				additionalHeaders: ['cache-control', 'x-requested-with']
			}
		}
  },
];