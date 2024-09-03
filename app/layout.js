import Link from 'next/link';
import './styles/index.scss';

export const metadata = {
  title: 'Vault 51 Tattoo',
  description: 'Custom tattoos in Baltimore, Maryland',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header className="header">
          <div className="header__container">
            <Link className="header__logo" href="/"><h1>Vault 51</h1></Link>
            <nav className="header__nav"></nav>
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
                  <Link href="http://www.instagram.com/vault51tattoo">Instagram</Link>
                </li>
              </ul>
            </nav>
          </div>
        </footer>
      </body>
    </html>
  );
}
