// src/utils/url.ts
export function readQuery(): Record<string, string> {
  const params = new URLSearchParams(window.location.search);
  const query: Record<string, string> = {};
  params.forEach((value, key) => {
    query[key] = value;
  });
  return query;
}

/**
 * Sets or updates query params in the URL (without reloading).
 */
export function setQuery(updates: Record<string, string | number | undefined>) {
  const url = new URL(window.location.href);
  Object.entries(updates).forEach(([key, value]) => {
    if (value === undefined || value === null || value === "") {
      url.searchParams.delete(key);
    } else {
      url.searchParams.set(key, String(value));
    }
  });

  window.history.pushState({}, "", url.toString());
}
