'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { i18n, type Locale } from '@/i18n/i18n-config';

export default function LocaleSwitcher() {
  const pathname = usePathname();
  const redirectedPathname = (locale: Locale) => {
    if (!pathname) return '/';
    const segments = pathname.split('/');
    segments[1] = locale;
    return segments.join('/');
  };

  return (
    <div className="flex justify-center gap-8 underline">
      {i18n.locales.map((locale) => {
        return (
          <div key={locale}>
            <Link href={redirectedPathname(locale)}>{locale}</Link>
          </div>
        );
      })}
    </div>
  );
}
