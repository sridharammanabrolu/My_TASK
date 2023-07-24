const config = require('../config/app_config');
const CommonResponse = require('../models/CommonResponse');

const handleCommonResponse = async (successCb, response) => {
	try {
		return await successCb((data) => {
			response
				.set('Connection', 'close')
				.status(config.http_status.ok)
				.send(data);
			if (response.locals.responseCb) {
				postExecution(response);
			}
		});
	} catch (error) {
		console.log(
			'===> ~ file: response_handle_service.js ~ line 13 ~ handleCommonResponse ~ error',
			error
		);
		return response
			.set('Connection', 'close')
			.status(config.http_status.ok)
			.send(
				new CommonResponse()
					.setHeader(
						error.responseCode ||
							config.response_code[
								config.errors[error.code || error.message]
							] ||
							config.response_code.error
					)
					.setBody(error?.bodyData || null)
					.setError(
						error?.errorData || {
							message: error.message,
						}
					)
			);
	}
};

const postExecution = async (response) => {
	try {
		let postExecutionResult = await response.locals.responseCb();
		console.log(
			'===> ~ file: response_handle_service.js ~ line 41 ~ postExecution ~ postExecutionResult',
			postExecutionResult
		);
	} catch (error) {
		console.log(
			'===> ~ file: response_handle_service.js ~ line 42 ~ postExcution ~ error',
			error
		);
	}
};

module.exports = handleCommonResponse;
