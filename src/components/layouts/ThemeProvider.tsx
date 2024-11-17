'use client';

import dynamic from 'next/dynamic';
import { ThemeProviderProps } from 'next-themes';

const NextThemeProvider = dynamic(() => import('next-themes').then((mod) => mod.ThemeProvider), {
  ssr: false,
});

export default function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemeProvider {...props}>{children}</NextThemeProvider>;
}
