import { use } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Gallery from '../../components/gallery';
import Artists from '@/public/artists.json';
import './style.scss';

const images = [
  {
      "largeURL": "/cal.jpg",
      "thumbnailURL": "/cal.jpg",
      "width": 900,
      "height": 1200
  },
  {
      "largeURL": "/cal.jpg",
      "thumbnailURL": "/cal.jpg",
      "width": 900,
      "height": 1200
  },
];

async function getArtistBySlug( slug ) {
  return Artists.find( ( artist ) => artist.slug === slug ) || null;
}

export default function Artist({ params }) {
  const artist = use( getArtistBySlug( params.artist ) );

  if ( ! artist ) {
    return <p>Artist not found</p>;
  }

  return (
    <div className="page page--artist">
      <section className="hero">
        <div className="hero__background">
          <Image className="hero__image" src={artist.hero} alt={artist.name} width="1440" height="810" />
        </div>
      </section>

      <section className="artist l-section">
        <div className="artist__container l-section__container">
          <header className="artist__header">
            <h2 className="artist__name">{artist.name}</h2>
            <Link className="artist__instagram" href={'https://www.instagram.com/' + artist.instagram_handle}>
              <svg className="artist__icon" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 50 50">
                <path d="M 16 3 C 8.8324839 3 3 8.8324839 3 16 L 3 34 C 3 41.167516 8.8324839 47 16 47 L 34 47 C 41.167516 47 47 41.167516 47 34 L 47 16 C 47 8.8324839 41.167516 3 34 3 L 16 3 z M 16 5 L 34 5 C 40.086484 5 45 9.9135161 45 16 L 45 34 C 45 40.086484 40.086484 45 34 45 L 16 45 C 9.9135161 45 5 40.086484 5 34 L 5 16 C 5 9.9135161 9.9135161 5 16 5 z M 37 11 A 2 2 0 0 0 35 13 A 2 2 0 0 0 37 15 A 2 2 0 0 0 39 13 A 2 2 0 0 0 37 11 z M 25 14 C 18.936712 14 14 18.936712 14 25 C 14 31.063288 18.936712 36 25 36 C 31.063288 36 36 31.063288 36 25 C 36 18.936712 31.063288 14 25 14 z M 25 16 C 29.982407 16 34 20.017593 34 25 C 34 29.982407 29.982407 34 25 34 C 20.017593 34 16 29.982407 16 25 C 16 20.017593 20.017593 16 25 16 z"></path>
              </svg>
              <span className="artist__handle">{artist.instagram_handle}</span>
            </Link>
            <a className="artist__button button button--inverted" href={artist.booking_url}>Book Online</a>
          </header>
          <div className="artist__text">
            <div className="artist__specialties"><strong>Specialties:</strong> {artist.specialties.join(', ')}</div>
            <div className="artist__intro content" dangerouslySetInnerHTML={{ __html: artist.long_bio }} />
          </div>
        </div>
      </section>

      <section className="l-section">
        <div className="l-section__container">
          <h2 className="l-section__heading" name="portfolio">Portfolio</h2>
          <Gallery galleryID="gallery" images={artist.gallery} />
        </div>
      </section>
    </div>
  );
}
