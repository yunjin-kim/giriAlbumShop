import { AxiosError } from 'axios';
import { createAsyncAction } from 'typesafe-actions';
import { ArtistName, ArtAlbum }  from '../artistNameTypes';
import { AlbumAlbum, AlbumName } from '../albumNameTypes';

export const GET_ALBUMS_ARTISTNAME = 'GET_ALBUMS_ARTISTNAME';
export const GET_ALBUMS_ARTISTNAME_SUCCESS = 'GET_ALBUMS_ARTISTNAME_SUCCESS';
export const GET_ALBUMS_ARTISTNAME_ERROR = 'GET_ALBUMS_ARTISTNAME_ERROR';

export const getAlbumsArtistNameAsync = createAsyncAction(
  GET_ALBUMS_ARTISTNAME,
  GET_ALBUMS_ARTISTNAME_SUCCESS,
  GET_ALBUMS_ARTISTNAME_ERROR
)<undefined, ArtistName, AxiosError>();

export const GET_ALBUMS_ALBUMNAME = 'GET_ALBUMS_ALBUMNAME';
export const GET_ALBUMS_ALBUMNAME_SUCCESS = 'GET_ALBUMS_ALBUMNAME_SUCCESS';
export const GET_ALBUMS_ALBUMNAME_ERROR = 'GET_ALBUMS_ALBUMNAME_ERROR';

export const getAlbumsAlbumNameAsync = createAsyncAction(
  GET_ALBUMS_ALBUMNAME,
  GET_ALBUMS_ALBUMNAME_SUCCESS,
  GET_ALBUMS_ALBUMNAME_ERROR
)<undefined, AlbumName, AxiosError>();

export const GET_ALBUM = 'GET_ALBUM';
export const GET_ALBUM_SUCCESS = 'GET_ALBUM_SUCCESS';
export const GET_ALBUM_ERROR = 'GET_ALBUM_ERROR';

export const getAlbumAsync = createAsyncAction(
  GET_ALBUM,
  GET_ALBUM_SUCCESS,
  GET_ALBUM_ERROR
)<undefined, ArtAlbum | AlbumAlbum, AxiosError>();