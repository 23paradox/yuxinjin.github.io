import { getCollection, type CollectionEntry } from "astro:content";

export type PublicationEntry = CollectionEntry<"publications">;
export type ResearchProjectEntry = CollectionEntry<"researchProjects">;

const publicationSourceFiles = import.meta.glob(
  "../content/publications/**/*.md",
);
const researchProjectSourceFiles = import.meta.glob(
  "../content/research-projects/**/*.md",
);

export async function loadPublications(): Promise<PublicationEntry[]> {
  return Object.keys(publicationSourceFiles).length > 0
    ? getCollection("publications")
    : [];
}

export async function loadResearchProjects(): Promise<ResearchProjectEntry[]> {
  return Object.keys(researchProjectSourceFiles).length > 0
    ? getCollection("researchProjects")
    : [];
}

export function sortPublicationsChronologically(
  entries: PublicationEntry[],
): PublicationEntry[] {
  return [...entries].sort((left, right) => {
    const yearDifference = (right.data.year ?? 0) - (left.data.year ?? 0);

    if (yearDifference !== 0) {
      return yearDifference;
    }

    return left.data.title.localeCompare(right.data.title);
  });
}

export function groupPublicationsByTheme(
  entries: PublicationEntry[],
): Map<string, PublicationEntry[]> {
  const groups = new Map<string, PublicationEntry[]>();

  for (const entry of entries) {
    for (const theme of entry.data.themes ?? []) {
      const group = groups.get(theme) ?? [];
      group.push(entry);
      groups.set(theme, group);
    }
  }

  for (const [theme, group] of groups) {
    groups.set(theme, sortPublicationsChronologically(group));
  }

  return groups;
}

export function getSelectedPublications(
  entries: PublicationEntry[],
): PublicationEntry[] {
  return entries
    .filter((entry) => entry.data.selected === true)
    .sort((left, right) => {
      const displayOrderDifference =
        (left.data.displayOrder ?? Number.MAX_SAFE_INTEGER) -
        (right.data.displayOrder ?? Number.MAX_SAFE_INTEGER);

      if (displayOrderDifference !== 0) {
        return displayOrderDifference;
      }

      return (
        (right.data.year ?? 0) - (left.data.year ?? 0) ||
        left.data.title.localeCompare(right.data.title)
      );
    });
}

export function getSelectedResearchProjects(
  entries: ResearchProjectEntry[],
): ResearchProjectEntry[] {
  return entries
    .filter((entry) => entry.data.selected === true)
    .sort(
      (left, right) =>
        (left.data.displayOrder ?? Number.MAX_SAFE_INTEGER) -
          (right.data.displayOrder ?? Number.MAX_SAFE_INTEGER) ||
        left.data.title.localeCompare(right.data.title),
    );
}

/**
 * Resolve project publication references against the already-loaded public
 * record set. Missing references are ignored so a stale or incomplete record
 * cannot break a static build or page render.
 */
export function resolveReferencedPublications(
  project: ResearchProjectEntry,
  publications: PublicationEntry[],
): PublicationEntry[] {
  const publicationsById = new Map(
    publications.map((publication) => [publication.id, publication]),
  );

  return (project.data.relatedPublications ?? []).flatMap((reference) => {
    const publication = publicationsById.get(reference.id);
    return publication ? [publication] : [];
  });
}
