import { z, defineCollection } from "astro:content";

const productsCollection = defineCollection({
  schema: ({ image }) =>
    z.object({
      id: z.number(),
      title: z.string(),
      description: z.string(),
      tags: z.array(z.string()),
      date: z.string(),
      author: z.string(),
      image: z
        .object({
          url: image(),
          alt: z.string(),
        })
        .optional(),
      category: z.string(),
      release: z.boolean(),
    }),
});

export const collections = {
  products: productsCollection,
};
