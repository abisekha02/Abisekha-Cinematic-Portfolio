import type { Metadata } from 'next';
import { Outfit } from 'next/font/google';
import './globals.css';

const outfit = Outfit({ subsets: ['latin'], variable: '--font-outfit', display: 'swap' });

export const metadata: Metadata = {
  title: 'Abisekha Melfin | AI Engineer & Full Stack Developer',
  description: 'AI engineering, intelligent automation, full-stack applications, computer vision, and immersive technology projects.',
  metadataBase: new URL('https://abisekha-dev.netlify.app'),
  openGraph: {
    title: 'Abisekha Melfin | AI Engineer & Full Stack Developer',
    description: 'Building useful AI products and intelligent applications.',
    type: 'website',
    images: [{ url: '/og-image.svg', width: 1200, height: 630, alt: 'Abisekha Melfin — AI and Full Stack Engineer' }],
  },
  twitter: { card: 'summary_large_image', title: 'Abisekha Melfin | AI / Full Stack Engineer', description: 'Building practical AI applications, business-ready software, and computer vision systems.', images: ['/og-image.svg'] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" className={outfit.variable}><body className="bg-black text-white">{children}</body></html>;
}
