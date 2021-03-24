const fs = require("fs")

const CONSTANTS = {
	DATASET_LOCATION: "./datasets/"
}

const isServiceFile = fileName => /^s_\d+/.test(fileName)

const loadDataSet = (serviceId) => {
	if ([null, undefined, ""].includes(serviceId)) {
		throw new Error("serviceId must be given")
	}

	return JSON.parse(
		fs.readFileSync(
			path.join(__dirname, CONSTANTS.DATASET_LOCATION, `${serviceId}.json`),
			"utf-8"
		)
	)
}

module.exports = { loadDataSet, isServiceFile }