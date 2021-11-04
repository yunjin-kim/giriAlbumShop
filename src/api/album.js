import axios from "axios";

export const getAlbums = async(searchText) => {
  const albums = await axios.get(`http://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=${searchText}&api_key=4eaa2e6cafb967fa096e6d2e3dec0344&format=json`);
  return albums;
}

export const getAlbum = async(url) => {
  const urlArtist = url.match(/.+(?=:)/gm)[0];
  const urlAlumName = url.match(/(?<=:)[^]+/gm)[0];
  const albums = await axios.get(`http://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=${urlArtist}&api_key=4eaa2e6cafb967fa096e6d2e3dec0344&format=json`);
  const album = albums.data.topalbums.album.find(data => data.name === urlAlumName)
  return album;
}