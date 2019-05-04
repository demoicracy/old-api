const { plugins: restifyPlugins } = require('restify');
const Respectify = require('respectify');

module.exports = server => {
	server.use(restifyPlugins.gzipResponse());
	server.use(restifyPlugins.queryParser({ mapParams: true }));
	server.use(restifyPlugins.bodyParser({ mapParams: true }));
	server.use(restifyPlugins.fullResponse());

	const respectify = new Respectify(server);
	server.use(respectify.middleware());
};
