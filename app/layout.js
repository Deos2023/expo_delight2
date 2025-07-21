// app/layout.js
import "./globals.css";
import Sidebar from "./components/Sidebar";
import { Ephesis, Sono, Oswald, Great_Vibes } from 'next/font/google';
import MobileNavbar from "./components/Navbar";

// Font configuration
const ephesis = Ephesis({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-ephesis',
});

const sono = Sono({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-sono',
});

const oswald = Oswald({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-oswald',
});

const greatVibes = Great_Vibes({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-great-vibes',
});

export const metadata = {
  title: "Your App Title",
  description: "App description here",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`
          ${ephesis.variable}
          ${sono.variable}
          ${oswald.variable}
          ${greatVibes.variable}
        `}
        style={{
          fontFamily: 'var(--font-oswald)',
          letterSpacing: '0.05em',
        }}
      >
        {/* Sidebar floats on top */}
        <Sidebar />
        <MobileNavbar />
        {/* Main content renders behind or beside sidebar (no margin) */}
        <main className="">
          {children}
        </main>
      </body>
    </html>
  );
}
