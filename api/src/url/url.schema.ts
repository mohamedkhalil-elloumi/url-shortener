import { z } from "zod";

export const shortenUrlSchema = z
  .object({
    originalUrl: z.string().url(),
  })
  .strict();

export const getSlugSchema = z.object({
  slug: z.string(),
});
