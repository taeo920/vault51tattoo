import Link from 'next/link';
import Image from 'next/image';
import './style.scss';

export default function Card() {
    return (
      <div className="card">
        <Link className="card" href="/artist/cal">
          <Image className="card__image" src="/cal.jpg" alt="Cal" width="800" height="1200" />
        </Link>
        <div className="card__text">
          <div className="card__heading">
            <h3 className="card__name">Cal</h3>
            <Link className="card__instagram" href="https://www.instagram.com/calelleeko">
              <svg className="card__icon" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 50 50">
                <path d="M 16 3 C 8.8324839 3 3 8.8324839 3 16 L 3 34 C 3 41.167516 8.8324839 47 16 47 L 34 47 C 41.167516 47 47 41.167516 47 34 L 47 16 C 47 8.8324839 41.167516 3 34 3 L 16 3 z M 16 5 L 34 5 C 40.086484 5 45 9.9135161 45 16 L 45 34 C 45 40.086484 40.086484 45 34 45 L 16 45 C 9.9135161 45 5 40.086484 5 34 L 5 16 C 5 9.9135161 9.9135161 5 16 5 z M 37 11 A 2 2 0 0 0 35 13 A 2 2 0 0 0 37 15 A 2 2 0 0 0 39 13 A 2 2 0 0 0 37 11 z M 25 14 C 18.936712 14 14 18.936712 14 25 C 14 31.063288 18.936712 36 25 36 C 31.063288 36 36 31.063288 36 25 C 36 18.936712 31.063288 14 25 14 z M 25 16 C 29.982407 16 34 20.017593 34 25 C 34 29.982407 29.982407 34 25 34 C 20.017593 34 16 29.982407 16 25 C 16 20.017593 20.017593 16 25 16 z"></path>
              </svg>
              <span className="card__handle">calelleeko</span>
            </Link>
          </div>
          <div className="card__specialties"><strong>Specialties:</strong> B&W Realism, Color Surrealism</div>
          <div className="card__intro">With more than xx years of experience Cal is the founder and owner of Vault 51 Tattoo.</div>
          <div className="card__buttons">
            <Link className="button" href="/artist/cal#book">Book Online</Link>
            <Link className="button button--alt" href="/artist/cal#portfolio">Portfolio</Link>
          </div>
        </div>
      </div>
    );
}
