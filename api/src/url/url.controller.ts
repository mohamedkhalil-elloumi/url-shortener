import { Context } from "koa";
import { z } from "zod";

import { getSlugSchema, shortenUrlSchema } from "./url.schema";
import { shortenUrlService, getSlugService } from "./url.service";

export async function shortenUrlController(
  ctx: Context & { request: { body: z.infer<typeof shortenUrlSchema> } }
) {
  try {
    const { originalUrl } = ctx.request.body;

    const result = await shortenUrlService(originalUrl);
    ctx.status = 201;
    ctx.body = result;
  } catch (e: any) {
    //Sentry could be added here to report the original error and return to the user a generic error message
    return ctx.throw(500, e);
  }
}

export async function getSlugController(
  ctx: Context & { request: { params: z.infer<typeof getSlugSchema> } }
) {
  try {
    const { slug } = ctx.request.params;
    const originalUrl = await getSlugService(slug);
    if (!originalUrl) {
      return ctx.throw(404, "Slug not found");
    }
    ctx.status = 301;
    ctx.redirect(originalUrl);
  } catch (e: any) {
    return ctx.throw(500, e);
  }
}
