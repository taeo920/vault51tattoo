import Link from 'next/link';
import Header from './components/header';
import './styles/index.scss';

export const metadata = {
  title: 'Vault 51 Tattoo',
  description: 'Custom tattoos in Baltimore, Maryland',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header></Header>

        <main className="main">
          {children}
        </main>

        <footer className="footer">
          <div className="footer__container">
            <copy>All Rights Reserved © Vault 51 Tattoo, LLC</copy>
          </div>
        </footer>
      </body>
    </html>
  );
}
