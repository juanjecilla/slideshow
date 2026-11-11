const FILES = import.meta.glob('./assets/**/*.{webp,gif,jpg,mp4}', { eager: true, query: '?url', import: 'default' }) as Record<string, string>;

/** URL of a bundled artefact by its file name under deck/assets (e.g. `luke.webp`, `video/trail-leire.mp4`). */
export function asset(name: string): string {
  const url = FILES[`./assets/${name}`];
  if (!url) throw new Error(`asset not found: ${name}`);
  return url;
}
