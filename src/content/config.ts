import { z, defineCollection } from "astro:content";

const productsCollection = defineCollection({
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      tags: z.array(z.string()),
      author: z.string(),
      date: z.string(),
      image: z.object({
        url: image(),
        alt: z.string(),
      }),
      category: z.string(),
      release: z.boolean(),
    }),
});

export const collections = {
  products: productsCollection,
};
