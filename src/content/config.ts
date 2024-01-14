import { defineCollection, reference, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    // `authors` コレクションから `id` で1人の著者を参照
    author: reference('authors'),
    // `blog`コレクションから`slug`による関連記事の配列を参照
    relatedPosts: z.array(reference('blog')),
  })
});

const authors = defineCollection({
  type: 'data',
  schema: z.object({
    name: z.string(),
    portfolio: z.string().url(),
  })
});

export const collections = { blog, authors };