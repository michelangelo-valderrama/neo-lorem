import { SITE } from '../consts'
import { getCollection } from 'astro:content'
import rss from '@astrojs/rss'

export async function GET(context) {
  const blog = await getCollection('blog')
  return rss({
    title: SITE.TITLE,
    description: SITE.DESCRIPTION,
    site: context.site,
    items: blog.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: `/blog/${post.slug}/`,
    })),
    customData: `<language>es-ES</language>`,
  })
}
