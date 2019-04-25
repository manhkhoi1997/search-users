const request = require('request');

class SlackLogger {

    constructor(slackWebHookURL) {
        this.slackWebHookURL = slackWebHookURL;
    }

    log(message) {
        request.post({
            url: this.slackWebHookURL,
            json: true,
            body: {text: JSON.stringify(message)}
        });
    }
}
module.exports = SlackLogger;
