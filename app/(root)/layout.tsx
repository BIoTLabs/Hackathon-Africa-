import '../globals.css';
import type { Metadata } from 'next';
import { Manrope } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import NavbarTwo from '@/components/NavbarTwo';

const manrope = Manrope({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Hackathon Africa',
  description: 'hackathon|blockchain',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={`${manrope.className}`}>
        <Navbar />
        <main>{children}</main>

        <Footer />
      </body>
    </html>
  );
}
