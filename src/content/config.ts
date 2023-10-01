import { z, defineCollection } from 'astro:content'

const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    subtitle: z.string().optional(),
    description: z.string().max(250),
    pubDate: z.string().transform((str) => new Date(str)),
    mainImg: z.string().transform((str) => `/assets/blog/${str}`),
    tags: z.array(z.string()),
  }),
})

export const collections = { blog }
