const mongoose = require('mongoose');

var client;

function connect(connString) {
	mongoose.set('strictQuery', false)
	client = mongoose
		.connect(connString, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
			ignoreUndefined: true,
		})
		.then(() => {
			console.log(
				`'${
					mongoose.connection.name || 'DB'
				}' has been sucessfully connected\n`
			);
			return client;
		})
		.catch((err) => {
			console.log(err.message);
			process.exit(1);
		});
}

mongoose.connection.on('connected', () => {
	console.log(` mongoose connected with mongodb`);
});
mongoose.connection.on('error', (err) => {
	console.log(err.message, '\n');
});
mongoose.connection.on('disconnected', () => {
	console.log(` mongoose disconnected from mongodb\n`);
});

process.on('SIGINT', async () => {
	await mongoose.connection.close();
	process.exit(0);
});

module.exports = {
	client,
	conn: mongoose.connection,
	connect,
};
