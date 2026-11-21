import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const musicSchema = z.object({
  title: z.string(),
  kind: z.literal(["audio", "video"]),
  filename: z.string(),
});
const music = defineCollection({
  loader: glob({ base: "./src/content/music", pattern: "**/*.md" }),
  schema: musicSchema,
});

const photoSchema = z.object({
  title: z.string(),
  filename: z.string(),
});
const photos = defineCollection({
  loader: glob({ base: "./src/content/photos", pattern: "**/*.md" }),
  schema: photoSchema,
});

const thoughtSchema = z.object({
  title: z.string(),
});
const thoughts = defineCollection({
  loader: glob({ base: "./src/content/thoughts", pattern: "**/*.md" }),
  schema: thoughtSchema,
});

export const collections = { music, photos, thoughts };
