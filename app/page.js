import Image from 'next/image';
import Card from './components/card';

export default function Home() {
  return (
    <div className="page page--home">
      <section className="hero">
        <div className="hero__container">
          <h2 className="hero__heading">Dope AF Tattoos</h2>
          <span className="hero__sub-heading">Finksburg, Maryland</span>
        </div>
        <div className="hero__background">
          <Image className="hero__image" src="/shop.jpg" alt="" width="1440" height="810" />
        </div>
      </section>

      <section className="l-section">
        <div className="l-section__container">
          <h2 className="l-section__heading">Artists</h2>
          <div className="l-grid" data-columns="2">
            <Card />
            <Card />
          </div>
        </div>
      </section>
    </div>
  );
}
