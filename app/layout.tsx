import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';

import './globals.css';
import Footer from '@/components/organisms/footer/footer';
import Navbar from '@/components/organisms/navbar';
import Providers from '@/providers/providers';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: {
    default:
      'Trehaus - Budowa Domów Drewnianych | Konstrukcje Szkieletowe w Pomorskim',
    template: '%s | Trehaus',
  },
  description:
    'Odkryj wyjątkowe domy drewniane i konstrukcje szkieletowe o niepowtarzalnym designie w województwie pomorskim. Nasza firma oferuje kompleksowe usługi budowy domów z drewna, połączone z pasją do tradycji i innowacji. Stwórz swój wymarzony dom razem z nami. Skontaktuj się już dziś! Ponad 20 lat doświadczenia nabytego w pracy w Skandynawii gwarantuje wysoką jakość naszych usług.',
  twitter: {
    card: 'summary_large_image',
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_WEBSITE_URL || ''),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body className={poppins.className}>
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
