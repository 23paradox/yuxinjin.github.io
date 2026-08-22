import type {
  EducationRecord,
  PresentationRecord,
  RecognitionItem,
  TeachingRecord,
  VisitingRecord,
} from "../data/site";

function formatRange(
  startDate?: string,
  endDate?: string,
  expectedEndDate?: string,
): string | null {
  const start = startDate?.trim();
  const end = endDate?.trim();
  const expectedEnd = expectedEndDate?.trim();

  if (start && end) {
    return `${start}–${end}`;
  }

  if (start && expectedEnd) {
    return `${start}–${expectedEnd}`;
  }

  return start ?? end ?? expectedEnd ?? null;
}

export function formatEducationPeriod(record: EducationRecord): string | null {
  return formatRange(record.startDate, record.endDate, record.expectedEndDate);
}

export function formatVisitingPeriod(record: VisitingRecord): string | null {
  if (record.current) {
    return record.startDate ? `${record.startDate}–present` : "present";
  }

  return formatRange(record.startDate, record.endDate);
}

export function formatTeachingPeriod(record: TeachingRecord): string | null {
  return formatRange(record.startDate, record.endDate);
}

export function formatPresentationDate(
  record: PresentationRecord,
): string | null {
  return record.date?.trim() || (record.year ? String(record.year) : null);
}

export function getPresentationsInDisplayOrder(
  items: readonly PresentationRecord[],
): PresentationRecord[] {
  return [...items].sort(
    (left, right) =>
      (right.year ?? 0) - (left.year ?? 0) ||
      (left.displayOrder ?? Number.MAX_SAFE_INTEGER) -
        (right.displayOrder ?? Number.MAX_SAFE_INTEGER),
  );
}

export function formatRecognitionDate(item: RecognitionItem): string | null {
  return item.date?.trim() || (item.year ? String(item.year) : null);
}

function compareRecognition(
  left: RecognitionItem,
  right: RecognitionItem,
): number {
  const displayOrderDifference =
    (left.displayOrder ?? Number.MAX_SAFE_INTEGER) -
    (right.displayOrder ?? Number.MAX_SAFE_INTEGER);

  if (displayOrderDifference !== 0) {
    return displayOrderDifference;
  }

  return (right.year ?? 0) - (left.year ?? 0);
}

export function getSelectedRecognition(
  items: readonly RecognitionItem[],
): RecognitionItem[] {
  return items.filter((item) => item.selected).sort(compareRecognition);
}

export function getRecognitionInDisplayOrder(
  items: readonly RecognitionItem[],
): RecognitionItem[] {
  return [...items].sort(compareRecognition);
}
