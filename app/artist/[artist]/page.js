import { use } from 'react';
import Image from 'next/image';
import Gallery from '../../components/gallery';
import Socials from '../../components/socials';
import Artists from '@/public/artists.json';
import './style.scss';

async function getArtistBySlug( slug ) {
  return Artists.find( ( artist ) => artist.slug === slug ) || null;
}

export async function generateStaticParams() {
  return Artists.map( ( artist ) => ({
    artist: artist.slug,
  }));
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
            <Socials socialMedia={artist.social_media} className="artist__socials" />
            {artist.booking_url && (
              <a className="artist__button button button--inverted" href={artist.booking_url}>Book Online</a>
            )}
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
