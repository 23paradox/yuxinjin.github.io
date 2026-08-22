import { defineCollection, reference } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";
import { publicationStatusValues } from "./data/publication-status";

const publicLinkSchema = z.object({
  purpose: z.enum([
    "paper",
    "preprint",
    "journal",
    "doi",
    "code",
    "slides",
    "data",
    "other",
  ]),
  url: z.url(),
  label: z.string().min(1).optional(),
});

const publications = defineCollection({
  loader: glob({
    base: "./src/content/publications",
    pattern: "**/*.md",
  }),
  schema: z.object({
    public: z.literal(true),
    slug: z.string().min(1).optional(),
    title: z.string().min(1),
    authors: z.array(z.string().min(1)).min(1),
    year: z.number().int().min(1000).max(9999).optional(),
    venue: z.string().min(1).optional(),
    status: z.enum(publicationStatusValues).optional(),
    acceptance: z.string().min(1).optional(),
    links: z.array(publicLinkSchema).optional(),
    themes: z.array(z.string().min(1)).optional(),
    selected: z.boolean().optional(),
    researchSummary: z.string().min(1).optional(),
    displayOrder: z.number().int().optional(),
  }),
});

const researchProjects = defineCollection({
  loader: glob({
    base: "./src/content/research-projects",
    pattern: "**/*.md",
  }),
  schema: z.object({
    public: z.literal(true),
    slug: z.string().min(1).optional(),
    title: z.string().min(1),
    status: z.string().min(1).optional(),
    overview: z.string().min(1),
    homepageSummary: z.string().min(1).optional(),
    relatedPublications: z.array(reference("publications")).optional(),
    links: z.array(publicLinkSchema).optional(),
    themes: z.array(z.string().min(1)).optional(),
    firstAuthorWork: z.boolean().optional(),
    selected: z.boolean().optional(),
    displayOrder: z.number().int().optional(),
  }),
});

export const collections = { publications, researchProjects };
