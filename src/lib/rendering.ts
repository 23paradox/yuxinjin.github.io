/**
 * Development-only fallback policy for optional public content.
 * Production builds return null so missing facts disappear instead of leaking
 * TODO text into the published site.
 */
export const showDevelopmentPlaceholders = import.meta.env.DEV;

export function developmentFallback<T>(
  value: T | null | undefined,
  placeholder: T,
): T | null {
  return value ?? (showDevelopmentPlaceholders ? placeholder : null);
}

export function hasText(value: string | null | undefined): value is string {
  return Boolean(value?.trim());
}
