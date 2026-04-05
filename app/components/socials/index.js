import Link from 'next/link';
import Image from 'next/image';
import './style.scss';

const SOCIAL_URLS = {
  instagram: 'https://www.instagram.com/',
  facebook: 'https://www.facebook.com/',
};

const LABELS = {
  instagram: 'Instagram',
  facebook: 'Facebook',
};

export default function Socials({ socialMedia = {} }) {
  const socials = Object.entries(socialMedia).filter(([, handle]) => Boolean(handle));

  if (!socials.length) {
    return null;
  }

  return (
    <div className="socials">
      {socials.map(([platform, handle]) => {
        const hrefBase = SOCIAL_URLS[platform];
        const href = hrefBase ? `${hrefBase}${handle}` : handle;

        return (
          <Link
            key={platform}
            className="socials__link"
            href={href}
            target="_blank"
            rel="noreferrer noopener"
          >
            {platform in SOCIAL_URLS && (
              <Image
                className="socials__icon"
                src={`/icon-${platform}.svg`}
                alt=""
                width={24}
                height={24}
                aria-hidden="true"
              />
            )}
            <span className="socials__label">{LABELS[platform] || platform}</span>
            <span className="socials__handle">{handle}</span>
          </Link>
        );
      })}
    </div>
  );
}
