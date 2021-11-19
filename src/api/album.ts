import axios from "axios";
import { AlbumName } from "../modules/albumNameTypes";
import { ArtistName } from "../modules/artistNameTypes";

export const getAlbumsArtistName = async (searchText: string) => {
  const albums = await axios.get<ArtistName>(`http://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=${searchText}&api_key=4eaa2e6cafb967fa096e6d2e3dec0344&format=json`);
  console.log(albums.data)
  return albums;
}


export const getAlbumsAlbumName = async (searchText: string) => {
  const musics = await axios.get<AlbumName>(`http://ws.audioscrobbler.com/2.0/?method=album.search&album=${searchText}&api_key=4eaa2e6cafb967fa096e6d2e3dec0344&format=json`);
  console.log(musics.data)
  return musics;
}

export const getAlbum = async(url: any) => {
  const urlArtist = url.match(/.+(?=:)/gm)[0];
  const urlAlumName = url.match(/(?<=:)[^]+/gm)[0];
  const albums = await axios.get<ArtistName>(`http://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=${urlArtist}&api_key=4eaa2e6cafb967fa096e6d2e3dec0344&format=json`);
  const album = albums.data.topalbums.album.find(data => data.name === urlAlumName);
  console.log(album)
  return album;
}