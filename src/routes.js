const Router = require("koa-router");
const logger = require("./logger");

const router = new Router();

router.get("/healthz", ctx => (ctx.status = 204));
router.post("/leads", ctx => {
  logger.info({ lead: ctx.request.body });
  ctx.status = 200;
});

module.exports = router.routes();
