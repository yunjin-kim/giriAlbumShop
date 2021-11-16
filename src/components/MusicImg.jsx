import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import '../App.css';

export default function MusicImg({ music }) {
  
  return(
    <>
      <LazyLoadImage
        alt={"앨범이미지"}
        effect="blur"
        delayTime="5000"
        src={music.image[2]['#text']}
      />
    </>
  )
}
