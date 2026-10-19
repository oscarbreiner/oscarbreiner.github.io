import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    featured: z.boolean().default(false),
    tags: z.array(z.string()).default([]),
    image: z.string(),
    imageFit: z.enum(['cover', 'contain']).default('cover'),
    imageBg: z.string().optional(),
    badges: z.array(z.string()).default([]),
    status: z.string().optional(),
    links: z
      .object({
        github: z.string().url().optional(),
        demo: z.string().url().optional(),
        writeup: z.string().url().optional()
      })
      .nullable()
      .optional()
      .transform((value) => value ?? {})
  })
});

export const collections = { projects };
