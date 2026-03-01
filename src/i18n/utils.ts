import { ui, defaultLang, type Lang } from './ui';

export function getLangFromUrl(url: URL): Lang {
  const [, maybeLocale] = url.pathname.split('/');
  if (maybeLocale in ui) return maybeLocale as Lang;
  return defaultLang;
}

export function useTranslations(lang: Lang) {
  return function t(key: keyof (typeof ui)[typeof defaultLang]): string {
    return (ui[lang] as Record<string, string>)[key] ?? (ui[defaultLang] as Record<string, string>)[key] ?? key;
  };
}

export function getAlternateUrls(url: URL, site: URL): { lang: Lang; href: string }[] {
  // Remove locale prefix if present to get the path segment
  const parts = url.pathname.split('/').filter(Boolean);
  const firstPart = parts[0];
  const pathWithoutLocale = firstPart in ui ? '/' + parts.slice(1).join('/') : url.pathname;
  const cleanPath = pathWithoutLocale === '/' ? '' : pathWithoutLocale;

  return [
    { lang: 'es', href: new URL(cleanPath || '/', site).href },
    { lang: 'en', href: new URL('/en' + (cleanPath || '/'), site).href },
  ];
}
