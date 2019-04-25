const Koa            = require('koa');

const config         = require("./config");

const userProvider   = require('./User/user.provider');
const router         = require('./router');
const loggerProvider = require("./loggers");
const knex           = require('knex')(config.knex); 
const njProvider     = require('./nunjucks.provider');

const app            = new Koa();

app.use(njProvider());
app.use(loggerProvider.loggerMiddleware(config));
app.use(userProvider(knex));
app.use(router.routes());

app.listen(3000);
