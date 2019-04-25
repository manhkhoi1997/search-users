const FileLogger    = require('./FileLogger');
const ConsoleLogger = require('./ConsoleLogger');
const NullLogger    = require('./NullLogger');
const SlackLogger   = require('./SlackLogger');

exports.createLogger = function (configuration) {
    switch(configuration.using) {
        case "file": 
            return new FileLogger(configuration.adapters.file.path);
        case "slack": 
            return new SlackLogger(configuration.adapters.slack.slackWebHook)
        case "console":
            return new ConsoleLogger();
        default:
            return new NullLogger();
    }
}
exports.loggerMiddleware = function(config) {
    const logger = exports.createLogger(config);
    
    return async (context, next) => {
        context.logger = logger;
        await next();
    }
}
