import React from 'react'

export default function MusicList({musics}) {
  if(musics.data.error) return <div className="errorMessageNoData">텅..</div>;

  return (
    <>

    </>
  )
}