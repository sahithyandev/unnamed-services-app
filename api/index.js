const app = require("express")()
// TODO use fs-extra instead
const fs = require("fs")
// TODO add "body-parser" 

const { CONSTANTS } = require("../global")

const RUNTIME_CONSTANTS = {
	PORT: 3000
}

const getServiceData = (serviceId = undefined) => {
	/** @type {Object[]} */
	const servicesMeta = JSON.parse(fs.readFileSync(CONSTANTS.SERVICES_META_JSON_FILE), "utf-8")

	if (serviceId === undefined) {
		return servicesMeta;
	}

	const notFoundObj = {
		"error": "ServiceNotFound"
	}

	return servicesMeta.find(serviceObj => serviceObj["service_id"] === serviceId) || notFoundObj
}

// a middleware
app.use((req, res, next) => {
	console.log(`Request made to ${req.url}`)

	next()
})

app.get("/status", (req, res) => {
	res.end("API Status: Working Fine")
})

app.get("/services(/:serviceId)?", (req, res) => {
	res.end(JSON.stringify(getServiceData(req.params.serviceId)))
})

app.post("/feed", (req, res) => {

	// TODO Check if user_id is valid

	// TODO Return the user's feed
	res.end(req.body)
})

app.post("/subscribe/:serviceId", (req, res) => {
	// TODO check if serviceId is valid
	// TODO check if userId is valid

	// TODO add userId to service's	subscriber's list
	res.end(req.body)
})

app.listen(RUNTIME_CONSTANTS.PORT, () => {
	console.log(`API listening on ${RUNTIME_CONSTANTS.PORT}`)
})