/** Resolve files in public/ against Vite's deployment base. */
export function publicAsset(path: string, base = import.meta.env.BASE_URL): string {
  if (/^(?:[a-z][a-z\d+.-]*:|\/\/)/i.test(path)) return path;
  return `${base.replace(/\/?$/, "/")}${path.replace(/^\/+/, "")}`;
}