import { z, defineCollection } from "astro:content"

const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    subtitle: z.string().optional(),
    description: z.string().max(250),
    pubDate: z.string().transform((str) => new Date(str)),
    update: z
      .string()
      .transform((str) => new Date(str))
      .optional(),
    mainImg: z
      .string()
      .transform((str) => `/images/blog/${str}`)
      .optional(),
    tags: z.array(z.string()),
    next: z
      .object({
        text: z.string(),
        link: z.string(),
      })
      .optional(),
    previus: z
      .object({
        text: z.string(),
        link: z.string(),
      })
      .optional(),
  }),
})

export const collections = { blog }
