const nunjucks      = require('nunjucks');

module.exports = () => {
    return async(context, next) => {
        context.nunjucks = nunjucks;

        context.render = (template, data) => {
            context.body = nunjucks.render(template, data);
        }
        await next();
    };
};
