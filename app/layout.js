import Link from 'next/link';
import { Inter, Bebas_Neue } from 'next/font/google';
import './styles/index.scss';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
});

const bebas = Bebas_Neue({
  subsets: ['latin'],
  variable: '--font-bebas-neue',
  display: 'swap',
  weight: '400'
});

export const metadata = {
  title: 'Vault 51 Tattoo',
  description: 'Custom tattoos in Baltimore, Maryland',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${bebas.variable}`}>
      <body>
        <header className="header">
          <div className="header__container">
            <Link className="header__logo" href="/"><h1>Vault 51 Tattoo</h1></Link>
            <nav className="header__nav">
              <ul>
                <li>
                  <Link href="/about">About</Link>
                </li>
              </ul>
            </nav>
          </div>
        </header>

        <main className="main">
          {children}
        </main>

        <footer className="footer">
          <div className="footer__container">
            <copy>All Rights Reserved © Vault 51 Tattoo, LLC</copy>
            <nav>
              <ul>
                <li>
                  <Link href="http://www.instagram.com">Instagram</Link>
                </li>
              </ul>
            </nav>
          </div>
        </footer>
      </body>
    </html>
  );
}
