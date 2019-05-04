const envs = {
	LOCAL: {
		APIUrl: 'http://localhost:4242',
		APIPort: '4242',
		dbUrl: 'mongodb://localhost:27017/demoicracy',
	},
	PROD: {
		APIUrl: '',
		APIPort: '443',
		dbUrl: 'mongodb://localhost:27017/demoicracy',
	},
};

module.exports = envs[process.env.NODE_ENV];
