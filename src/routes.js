const Router = require("koa-router");

const router = new Router();

router.get("/healthz", ctx => (ctx.status = 204));
router.post("/leads", ctx => {
  console.log(ctx.request.body);
  ctx.status = 204;
});

module.exports = router.routes();
