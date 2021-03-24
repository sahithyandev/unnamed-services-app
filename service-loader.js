/**
 * Creates meta.services.json file
 */

const path = require('path')
const fs = require('fs')

const { isServiceFile } = require("./services/service-helper")
const { CONSTANTS } = require("./global")

const services = fs.readdirSync(CONSTANTS.SERVICES_DIR).filter(isServiceFile).map(fileName => {
	return require("./services/" + fileName)
})

const servicesMeta = services.map(serviceFunction => {
	const meta = serviceFunction.__meta__

	if (meta) return meta;
})

// write JSON file
fs.writeFileSync(CONSTANTS.SERVICES_META_JSON_FILE, JSON.stringify(servicesMeta))