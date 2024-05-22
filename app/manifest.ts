import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Trehaus',
    short_name: 'Trehaus',
    description:
      'Odkryj wyjątkowe domy drewniane o niepowtarzalnym designie. Nasza firma oferuje kompleksowe usługi budowy domów z drewna, połączone z pasją do tradycji i innowacji. Stwórz swój wymarzony dom razem z nami. Skontaktuj się już dziś! Ponad 20 lat doświadczenia nabytego w pracy w Skandynawii gwarantuje wysoką jakość naszych usług.',
    start_url: '/',
    display: 'standalone',
    background_color: '#fff',
    theme_color: '#fff',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  };
}
