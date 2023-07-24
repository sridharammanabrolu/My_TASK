function unCaughtExceptionHandler(error) {
	console.error(
		new Date().toUTCString() + ' uncaughtException:',
		error.message
	);
	console.error(error.stack);
	process.exit(1);
}



module.exports = {
	
	unCaughtExceptionHandler,
	
};
