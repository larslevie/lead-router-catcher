const Koa = require("koa");
const body = require("koa-json-body");
const routes = require("./routes");
const logger = require("koa-pino-logger");

const app = new Koa();

app.use(body({ fallback: true }));
app.use(logger());
app.use(routes);

module.exports = app;
