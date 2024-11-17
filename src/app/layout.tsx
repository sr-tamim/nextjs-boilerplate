import type { Metadata } from 'next';
import { Jaldi } from 'next/font/google';
import './globals.css';
import ThemeProvider from '@/components/layouts/ThemeProvider';

const jaldiFont = Jaldi({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '700'],
  variable: '--font-jaldi',
});

export const metadata: Metadata = {
  title: 'SaleBee CRM',
  description: 'SaleBee CRM Application',
  openGraph: {
    title: 'SaleBee CRM',
    description: 'SaleBee CRM Application',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jaldiFont.variable}`}>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
