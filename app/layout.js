import { Inter } from 'next/font/google';
import { ModalProvider } from './context/ModalContext';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import './globals.css';

// const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Imago MUM | AI-Powered Fetal Ultrasound System',
  description: 'The world\'s first AI-Powered handheld, single probe fetal ultrasound system using semiconductor technology.',
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ModalProvider>
          <Header />
          {children}
          <Footer />
        </ModalProvider>
      </body>
    </html>
  );
}
