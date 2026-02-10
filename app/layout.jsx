// app/layout.jsx
import './globals.css';
import Header from './components/common/Header'; // Using relative path here is fine
import Footer from './components/common/Footer';

// Optional: Add Google Fonts
import { Inter, Playfair_Display } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair-display',
  display: 'swap',
})


export const metadata = {
  title: {
    default: "Jimma Palace Hotel | Luxury  & Comfort in Jimma, Ethiopia",
    template: "%s | Jimma Palace Hotel"
  },
  description: "Experience world-class hospitality at Jimma Palace Hotel. Book luxury rooms, enjoy fine dining, and relax in our premium spa.",
  keywords: ["Jimma Hotel", "Luxury Hotel Ethiopia", "Jimma Palace", "Accommodation Jimma"],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfairDisplay.variable}`}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}