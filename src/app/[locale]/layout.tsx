import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { ThemeProvider } from 'next-themes';
import localFont from 'next/font/local';
import type { Metadata } from 'next';

import { routing } from '@/i18n/routing';
import './globals.css';

const pattayaFont = localFont({
  src: './Pattaya-Regular.ttf',
  variable: '--font-pattaya',
});

export const metadata: Metadata = {
  title: 'Arthur Bender - Portfolio',
  description: 'Portfolio page of brazilian full-stack developer Arthur Bender',
  authors: [{ name: 'Arthur Bender' }],
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();

  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning className={pattayaFont.variable} data-scroll-behavior="smooth">
      <body>
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <div id="root">
              {children}
            </div>
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
