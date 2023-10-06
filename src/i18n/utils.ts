import { ui, defaultLang,languages } from './ui';

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  if (lang?.length > 0) return lang;
  return defaultLang;
}
