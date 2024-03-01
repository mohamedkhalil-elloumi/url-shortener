import Koa from "koa";
import cors from "@koa/cors";
import dotenv from "dotenv";
import path from "path";
import { zodRouter } from "koa-zod-router";

import { dataSource } from "./configuration/index";
import { getSlugRoute, shortenUrlRoute } from "./url/url.routes";

dotenv.config({
  path: path.join(__dirname, "../.env"),
});

dataSource
  .initialize()
  .then(() => {
    console.log("Database connected");
  })
  .catch((error) => {
    console.error("Error connecting to the database:", error);
  });

const app = new Koa();
app.use(cors());

app.use(async (ctx, next) => {
  if (ctx.request.path === "/") {
    ctx.body = "Welcome to the URL shortener API";
  } else {
    await next();
  }
});
const router = zodRouter();

router.register(shortenUrlRoute);
router.register(getSlugRoute);

app.use(router.routes()).use(router.allowedMethods());

app.listen(process.env.PORT, () => {
  console.log(`Server ready http://localhost:${process.env.PORT}`);
});
