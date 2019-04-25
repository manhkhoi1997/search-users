class ConsoleLogger {

    log(message) {
        console.log(`${new Date().toString()}`, message)
    }
}

module.exports = ConsoleLogger;
