export const publicationStatusValues = [
  "working-paper",
  "preprint",
  "submitted",
  "accepted",
  "forthcoming",
  "published",
] as const;

export type PublicationStatus = (typeof publicationStatusValues)[number];

export const publicationStatusLabels: Record<PublicationStatus, string> = {
  "working-paper": "Working paper",
  preprint: "Preprint",
  submitted: "Submitted",
  accepted: "Accepted",
  forthcoming: "Forthcoming",
  published: "Published",
};

export function publicationStatusLabel(status: PublicationStatus): string {
  return publicationStatusLabels[status];
}
