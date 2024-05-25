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
    default: 'Trehaus',
    template: '%s | Trehaus',
  },
  description:
    'Odkryj wyjątkowe domy drewniane o niepowtarzalnym designie. Nasza firma oferuje kompleksowe usługi budowy domów z drewna, połączone z pasją do tradycji i innowacji. Stwórz swój wymarzony dom razem z nami. Skontaktuj się już dziś! Ponad 20 lat doświadczenia nabytego w pracy w Skandynawii gwarantuje wysoką jakość naszych usług.',
  twitter: {
    card: 'summary_large_image',
  },
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
