/**
 * CRON test on heroku
 */

const fs = require("fs")
const path = require("path")
const cron = require("node-cron")

const testFile = path.join(__dirname, "cron-test.txt")

cron.schedule("* * * * *", () => {
	const s = fs.readFileSync(testFile, "utf-8") + "\n"
	console.log(s)
	fs.writeFileSync(testFile, s + new Date().toISOString())
})
