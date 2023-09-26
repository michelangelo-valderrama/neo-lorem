import { z, defineCollection } from 'astro:content'

const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    subtitle: z.string().optional(),
    description: z.string(),
    pubDate: z.string().transform((str) => new Date(str)),
    mainImg: z.string(),
  }),
})

export const collections = { blog }
