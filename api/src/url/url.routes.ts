import { createRouteSpec } from "koa-zod-router";

import { getSlugSchema, shortenUrlSchema } from "./url.schema";
import { shortenUrlController, getSlugController } from "./url.controller";

export const shortenUrlRoute = createRouteSpec({
  method: "post",
  path: "/api/shorten",
  validate: {
    body: shortenUrlSchema,
  },
  handler: shortenUrlController,
});

export const getSlugRoute = createRouteSpec({
  method: "get",
  path: "/:slug",
  validate: {
    params: getSlugSchema,
  },
  handler: getSlugController,
});
