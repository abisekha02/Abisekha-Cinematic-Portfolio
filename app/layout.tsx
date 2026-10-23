import type { Metadata } from 'next';
import { Outfit } from 'next/font/google';
import './globals.css';

const outfit = Outfit({ subsets: ['latin'], variable: '--font-outfit', display: 'swap' });

export const metadata: Metadata = {
  title: 'Abisekha Melfin | AI Engineer & Full Stack Developer',
  description: 'AI engineering, intelligent automation, full-stack applications, computer vision, and immersive technology projects.',
  openGraph: {
    title: 'Abisekha Melfin | AI Engineer & Full Stack Developer',
    description: 'Building useful AI products and intelligent applications.',
    type: 'website',
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" className={outfit.variable}><body className="bg-black text-white">{children}</body></html>;
}
