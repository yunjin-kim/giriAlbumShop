import React from 'react'
import MusicContainer from '../containers/MusicContainer';

export default function MusicPage({match}) {

  const { url } = match.params;

  return (
    <>
      <MusicContainer url={url} />
    </>
  )
}
