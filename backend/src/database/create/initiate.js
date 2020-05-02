const initiateDatabase = require('./createDatabase')
const initiateTables = require('./tables')

async function initiate() {
    await initiateDatabase()
    await initiateTables()
}

module.exports = initiate