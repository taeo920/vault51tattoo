import Image from 'next/image';
import Card from './components/card';
import Artists from '@/public/artists.json';

export default function Home() {
  return (
    <div className="page page--home">
      <section className="hero">
        <div className="hero__container">
          <h2 className="hero__heading">Tattoo Collective</h2>
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
            {Artists.map((artist, index) => (
              <Card artist={artist} key={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="l-section">
        <div className="l-section__container">
          <h2 className="l-section__heading">Location</h2>
          <iframe class="map" loading="lazy" allowfullscreen referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA_QLMMxNPZum-x-F0h7aaBzjKaIc3WdvU&q=Vault+51+tattoo+collective"></iframe>
        </div>
      </section>
    </div>
  );
}
