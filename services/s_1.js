const serviceHelper = require("./service-helper")

const s_1 = () => {
	const dataset = serviceHelper.loadDataSet(this.name)
	const subscribersArray = serviceHelper.getSubscribers(this.name)

	for (let subscriber of subscribersArray) {
		// TODO select a random quote
		// TODO add it to the subscriber's feed
	}
}

s_1.__meta__ = {
	"service_id": "s_1",
	"name": "Quotes",
	"description": "Gives you a quote"
}

module.exports = s_1