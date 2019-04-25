const fs = require('fs');

class FileLogger {
    constructor(filePath) {
        this.filePath = filePath;
    }

    log(message) {
        fs.appendFileSync(this.filePath, `${new Date().toString()}, message: ${JSON.stringify(message)}\n`);
    }
}


module.exports = FileLogger;
