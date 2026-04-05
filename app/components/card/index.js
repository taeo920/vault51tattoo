import Link from 'next/link';
import Image from 'next/image';
import Socials from '../socials';
import './style.scss';

export default function Card( {artist} ) {

  return (
    <div className="card">
      <Link className="card__link" href={'artist/' + artist.slug}>
        <Image className="card__image" src={artist.portrait} alt={artist.name} width="800" height="1200" />
      </Link>
      <div className="card__text">
        <div className="card__heading">
          <h3 className="card__name">{artist.name}</h3>
          <Socials socialMedia={artist.social_media} className="card__socials" />
        </div>
        <div className="card__specialties"><strong>Specialties:</strong> {artist.specialties.join(', ')}</div>
        <div className="card__intro">{artist.short_bio}</div>
        <div className="card__buttons">
          {artist.booking_url && (
            <Link className="button" href={artist.booking_url}>Book Online</Link>
          )}
          <Link className="button button--alt" href={'/artist/' + artist.slug + '#portfolio'}>Portfolio</Link>
        </div>
      </div>
    </div>
  );
}
