import React,{ useState, useEffect } from 'react';
import { getMusics } from './api/albums';
import MusicListContainer from './containers/MusicListContainer';

function App() {

  console.log("App")

    getMusics();


  return (
    <>
      {/* <MusicListContainer /> */}
    </>
  );
}

export default App;
