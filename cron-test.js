/**
 * CRON test on heroku
 */

const fs = require("fs")
const path = require("path")
const cron = require("node-cron")

const testFile = path.join(__dirname, "cron-test.txt")

cron.schedule("* * * * *", () => {
	console.log("writiing");
	fs.writeFileSync(testFile, new Date().toISOString())
})
