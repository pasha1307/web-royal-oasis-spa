const ID = import.meta.env["VITE_SANITY_PROJECT_ID"]!;
const DS = import.meta.env["VITE_SANITY_DATASET"] || 'production';
const API = '2025-01-01';

export async function sanityFetch<T>(query: string, params: Record<string, any> = {}) {
  const url = new URL(`https://${ID}.api.sanity.io/v${API}/data/query/${DS}`);
  url.searchParams.set('query', query);
  if (Object.keys(params).length) url.searchParams.set('params', JSON.stringify(params));
  const res = await fetch(url.toString(), { cache: 'force-cache' });
  if (!res.ok) throw new Error(`Sanity error: ${res.status}`);
  const json = await res.json();
  return json.result as T;
}
