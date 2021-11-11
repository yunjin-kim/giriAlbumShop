import * as postApi from '../api/album';
import { createAlbumsPromiseThunk, handleAlbumsAsyncActions, reducerUtils } from '../lib/asyncUtils';

const GET_ALBUMS_ARTISTNAME = 'GET_ALBUMS_ARTISTNAME';
const GET_ALBUMS_ARTISTNAME_SUCCESS = 'GET_ALBUMS_ARTISTNAME_SUCCESS';
const GET_ALBUMS_ARTISTNAME_ERROR = 'GET_ALBUMS_ARTISTNAME_ERROR';

const GET_ALBUMS_ALBUMNAME = 'GET_ALBUMS_ALBUMNAME';
const GET_ALBUMS_ALBUMNAME_SUCCESS = 'GET_ALBUMS_ALBUMNAME_SUCCESS';
const GET_ALBUMS_ALBUMNAME_ERROR = 'GET_ALBUMS_ALBUMNAME_ERROR';

const GET_ALBUM = 'GET_ALBUM';
const GET_ALBUM_SUCCESS = 'GET_ALBUM_SUCCESS';
const GET_ALBUM_ERROR = 'GET_ALBUM_ERROR';

const CLEAR_ALBUM = 'CLEAR_ALBUM';

export const getAlbumsArtistName = createAlbumsPromiseThunk(GET_ALBUMS_ARTISTNAME, postApi.getAlbumsArtistName);
export const getAlbumsAlbumName = createAlbumsPromiseThunk(GET_ALBUMS_ALBUMNAME, postApi.getAlbumsAlbumName);
export const getAlbum = createAlbumsPromiseThunk(GET_ALBUM, postApi.getAlbum);
export const clearAlbum = () => ({type: CLEAR_ALBUM});

const initialState = {
  albums: reducerUtils.initial(),
  musics: reducerUtils.initial(),
  album: reducerUtils.initial()
}

export default function albums(state = initialState, action) {
  switch(action.type) {
    case GET_ALBUMS_ARTISTNAME:
    case GET_ALBUMS_ARTISTNAME_SUCCESS:
    case GET_ALBUMS_ARTISTNAME_ERROR:
      const AlbumsArtistNameHandler = handleAlbumsAsyncActions(GET_ALBUMS_ARTISTNAME, 'albums', true);
      return AlbumsArtistNameHandler(state, action);
    case GET_ALBUMS_ALBUMNAME:
    case GET_ALBUMS_ALBUMNAME_SUCCESS:
    case GET_ALBUMS_ALBUMNAME_ERROR:
      const AlbumsAlbumsNameHandler = handleAlbumsAsyncActions(GET_ALBUMS_ALBUMNAME, 'musics', true);
      return AlbumsAlbumsNameHandler(state, action);
    case GET_ALBUM:
    case GET_ALBUM_SUCCESS:
    case GET_ALBUM_ERROR:
      const AlbumHandler = handleAlbumsAsyncActions(GET_ALBUM, 'album');
      return AlbumHandler(state, action);
    case CLEAR_ALBUM:
      return {
        ...state,
        album: reducerUtils.initial()
      }
    default:
      return state;
  }
}