const path = require("path")

module.exports = {
	CONSTANTS: {
		SERVICES_DIR: path.join(__dirname, "services"),
		SERVICES_META_JSON_FILE: path.join(__dirname, "meta.services.json")
	}
}