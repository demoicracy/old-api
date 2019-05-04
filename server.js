const restify = require('restify');
const mongoose = require('mongoose');

const config = require('./config/environments');
const registerMiddlewares = require('./config/middlewares');

const registerRoutes = require('./models/routes');

(async function launchServer() {
	try {
		const server = restify.createServer();
		registerMiddlewares(server);
		registerRoutes(server);

		mongoose.Promise = global.Promise;
		await mongoose.connect(config.dbUrl, { useNewUrlParser: true });

		if (config.env !== 'LOCAL') {
			process.on('SIGINT', () => {
				setTimeout(() => {
					server.close();
				}, 10000);
			});
		}

		server.listen(config.APIPort, () => {
			console.log(`Server listening at ${config.APIUrl}`);
		});
	} catch (err) {
		console.error(err.stack);
		if (config.env !== 'LOCAL') {
			setTimeout(() => launchServer(), 2000);
		} else {
			process.exit(-1);
		}
	}
}());
