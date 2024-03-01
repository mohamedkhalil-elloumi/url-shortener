import { customAlphabet } from "nanoid";

import { Url } from "../database/entities/Url";
import { dataSource } from "../configuration/index";

const nanoid = customAlphabet("1234567890abcdefghijklmnopqrstuvwxyz", 6);

const baseUrl = process.env.BASE_URL || "http://localhost:3000";

export async function shortenUrlService(originalUrl: string) {
  const urlRepository = dataSource.getRepository(Url);

  const urlDetails = await urlRepository.findOneBy({
    originalUrl,
  });
  if (urlDetails) {
    urlDetails.counter++;
    await urlRepository.save(urlDetails);
    return {
      originalUrl: urlDetails.originalUrl,
      shortenedUrl: `${baseUrl}/${urlDetails.slug}`,
      counter: urlDetails.counter,
      createdAt: urlDetails.createdAt,
    };
  }

  let slug = nanoid();
  while (await urlRepository.findOneBy({ slug })) {
    slug = nanoid();
  }
  await urlRepository.save(
    urlRepository.create({
      originalUrl,
      slug,
      counter: 1,
    })
  );
}

export async function getSlugService(slug: string) {
  const urlRepository = dataSource.getRepository(Url);
  const urlDetails = await urlRepository.findOneBy({
    slug,
  });
  if (!urlDetails) {
    return null;
  }
  return urlDetails.originalUrl;
}
