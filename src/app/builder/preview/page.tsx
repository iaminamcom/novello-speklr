'use client';

import { Icon } from "@/components/Icon";
import AppLayout from "@/components/layout/AppLayout";
import PropertyContent from "@/components/PropertyContent";
import { ThemeProvider, useTheme } from "@/context/ThemeContext";
import Link from "next/link";
import { Roboto, Inter, Playfair_Display } from 'next/font/google';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-roboto',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
});

const fontClassMap: Record<string, string> = {
  'OpenSauce': 'font-sans',
  'Roboto': roboto.className,
  'Inter': inter.className,
  'Playfair': playfair.className,
};

function PreviewContent() {
  const { theme, isCustomTheme } = useTheme();
  const fontClass = fontClassMap[theme.fontFamily] || 'font-sans';

  return (
    <AppLayout themed className={fontClass}>
      <div className="col-span-full">
        <div className="bg-primary/10 border border-primary/30 rounded-xl py-3 px-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Icon id="info-filled" width={24} className="text-primary" />
            <span>
              {isCustomTheme
                ? 'You are viewing your customized theme preview'
                : 'This is the default Novello theme'}
            </span>
          </div>
          <Link
            href="/builder"
            className="py-2 px-4 bg-primary rounded-full text-surface font-semibold text-sm hover:opacity-90 transition-opacity"
          >
            Edit Theme
          </Link>
        </div>
      </div>

      <PropertyContent />
    </AppLayout>
  );
}

export default function PreviewPage() {
  return (
    <ThemeProvider>
      <PreviewContent />
    </ThemeProvider>
  );
}
