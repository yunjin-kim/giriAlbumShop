import React from 'react'
import MusicContainer from '../containers/MusicContainer';

type MusicPageProps<P> = {
  match: Match<P>
}

type Match<P> = {
  params: P;
  isExact: boolean;
  path: string;
  url: string;
}

type MatchParams = {
  url: string;
};

export default function MusicPage({ match }: MusicPageProps<MatchParams>) {

  const { url } = match.params;

  return (
    <>
      <MusicContainer url={url} />
    </>
  )
}
