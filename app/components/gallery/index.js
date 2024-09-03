'use client';

import React, { useEffect } from 'react';
import PhotoSwipeLightbox from 'photoswipe/lightbox';
import 'photoswipe/style.css';
import './style.scss';

export default function Gallery(props) {
  console.log(props);

  useEffect(() => {
    let lightbox = new PhotoSwipeLightbox({
      gallery: '#' + props.galleryID,
      children: 'a',
      pswpModule: () => import('photoswipe'),
    });
    lightbox.init();

    return () => {
      lightbox.destroy();
      lightbox = null;
    };
  }, []);

  return (
    <div className="l-grid gallery" id={props.galleryID} data-columns="4">
      {props.images.map((image, index) => (
        <a
          className="gallery__item"
          href={image.largeURL}
          data-pswp-width={image.width}
          data-pswp-height={image.height}
          key={props.galleryID + '-' + index}
          target="_blank"
          rel="noreferrer"
        >
          <img src={image.thumbnailURL} alt="" />
        </a>
      ))}
    </div>
  );
}
  