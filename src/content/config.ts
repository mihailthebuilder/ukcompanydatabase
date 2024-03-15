import { defineCollection, z } from "astro:content";

const product = defineCollection({
  type: "content",
  // Type-check frontmatter using a schema
  schema: z.object({
    name: z.string(),
    url: z.string(),
    // Transform string to Date object
    pubDate: z.coerce.date(),
    rank: z.number(),
  }),
});

export const collections = { product };
