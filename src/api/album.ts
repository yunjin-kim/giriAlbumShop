import axios from "axios";
import { AlbumName } from "../modules/albumNameTypes";
import {  ArtAlbum, ArtistName } from "../modules/artistNameTypes";

export const getAlbumsArtistName = async (searchText: string): Promise<ArtistName> => {
  const albums = await axios.get<ArtistName>(`http://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=${searchText}&api_key=4eaa2e6cafb967fa096e6d2e3dec0344&format=json`);
  return albums.data;
}

export const getAlbumsAlbumName = async (searchText: string): Promise<AlbumName> => {
  const musics = await axios.get<AlbumName>(`http://ws.audioscrobbler.com/2.0/?method=album.search&album=${searchText}&api_key=4eaa2e6cafb967fa096e6d2e3dec0344&format=json`);
  return musics.data;
}
// <Album | undefined> 하면 payload 에서 오류 나서 any로 보류, 이것을 api를 받아온 것이 아니라 getAlbumsArtistName에서 불러온 데이토로 할 수 있지 않을까?
export const getAlbum = async (url: any): Promise<any> => {
  const urlArtist = url.match(/.+(?=:)/gm)[0];
  const urlAlumName = url.match(/(?<=:)[^]+/gm)[0];
  const albums = await axios.get<ArtistName>(`http://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=${urlArtist}&api_key=4eaa2e6cafb967fa096e6d2e3dec0344&format=json`);
  const album = albums.data.topalbums.album.find(data => data.name === urlAlumName);
  return [album]; // Objects are not valid as a React child (found: object with keys {name, url}). If you meant to render a collection of children, use an array instead.
}