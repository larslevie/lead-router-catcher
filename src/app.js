const Koa = require("koa");
const body = require("koa-json-body");
const routes = require("./routes");

const app = new Koa();

app.use(body({ fallback: true }));
app.use(routes);

module.exports = app;
