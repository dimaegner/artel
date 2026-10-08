const BASE_URL = import.meta.env.BASE_URL.replace(/\/$/, '');

export function publicAsset(path: string) {
  return `${BASE_URL}/${path.replace(/^\/+/, '')}`;
}
