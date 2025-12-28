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
          <video className="hero__video is-visible" src="/shop.mp4" poster="/shop.jpg" autoPlay muted loop width="1440" height="810"></video>
        </div>
      </section>

      <section className="l-section">
        <div className="l-section__container">
          <h2 className="l-section__heading">Artists</h2>
          <div className="l-grid" data-columns-md="2" data-columns-xl="3">
            {Artists.map((artist, index) => (
              <Card artist={artist} key={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="l-section">
        <div className="l-section__container">
          <h2 className="l-section__heading">Location</h2>
          <iframe className="map" loading="lazy" allowfullscreen referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA_QLMMxNPZum-x-F0h7aaBzjKaIc3WdvU&q=Vault+51+tattoo+collective"></iframe>
        </div>
      </section>
    </div>
  );
}
