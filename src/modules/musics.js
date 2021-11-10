import * as postApi from '../api/album';
import { reducerUtils } from '../lib/asyncUtils';

const GET_ALBUMS_ARTISTNAME = 'GET_ALBUMS_ARTISTNAME';
const GET_ALBUMS_ARTISTNAME_SUCCESS = 'GET_ALBUMS_ARTISTNAME_SUCCESS';
const GET_ALBUMS_ARTISTNAME_ERROR = 'GET_ALBUMS_ARTISTNAME_ERROR';

const GET_ALBUMS_ALBUMNAME = 'GET_ALBUMS_ALBUMNAME';
const GET_ALBUMS_ALBUMNAME_SUCCESS = 'GET_ALBUMS_ALBUMNAME_SUCCESS';
const GET_ALBUMS_ALBUMNAME_ERROR = 'GET_ALBUMS_ALBUMNAME_ERROR';

const GET_ALBUM = 'GET_ALBUM';
const GET_ALBUM_SUCCESS = 'GET_ALBUM_SUCCESS';
const GET_ALBUM_ERROR = 'GET_ALBUM_ERROR';

export const getAlbumsArtistName = (searchText) => async (dispatch) => {
  dispatch({type: GET_ALBUMS_ARTISTNAME});
  try{
    const albums = await postApi.getAlbumsArtistName(searchText);
    dispatch({type: GET_ALBUMS_ARTISTNAME_SUCCESS, albums});
  }
  catch(e) { 
    dispatch({type: GET_ALBUMS_ARTISTNAME_ERROR, error: e})
  }
}

export const getAlbumsAlbumName = (searchText) => async (dispatch) => {
  dispatch({type: GET_ALBUMS_ALBUMNAME});
  try{
    const musics = await postApi.getAlbumsAlbumName(searchText);
    dispatch({type: GET_ALBUMS_ALBUMNAME_SUCCESS, musics});
  }
  catch(e) {
    dispatch({type: GET_ALBUMS_ALBUMNAME_ERROR, error: e})
  }
}

export const getAlbum = (url) => async (dispatch) => {
  dispatch({type: GET_ALBUM});
  try{
    const album = await postApi.getAlbum(url);
    dispatch({type: GET_ALBUM_SUCCESS, album});
  }
  catch(e) {
    dispatch({type: GET_ALBUM_ERROR, error: e})
  }
}

const initialState = {
  albums: reducerUtils.initial(),
  musics: reducerUtils.initial(),
  album: reducerUtils.initial()
}

export default function albums(state = initialState, action) {
  switch(action.type) {
    case GET_ALBUMS_ARTISTNAME:
      return{
        ...state,
        albums: reducerUtils.loading()
      }
    case GET_ALBUMS_ARTISTNAME_SUCCESS:
      return{
        ...state,
        albums: reducerUtils.success(action.albums)
      }
    case GET_ALBUMS_ARTISTNAME_ERROR:
      return{
        ...state,
        albums: reducerUtils.error(action.error)
      }
    case GET_ALBUMS_ALBUMNAME:
      return{
        ...state,
        musics: reducerUtils.loading()
      }
    case GET_ALBUMS_ALBUMNAME_SUCCESS:
      return{
        ...state,
        musics: reducerUtils.success(action.musics)
      }
    case GET_ALBUMS_ALBUMNAME_ERROR:
      return{
        ...state,
        musics: reducerUtils.error(action.error)
      }
    case GET_ALBUM:
      return{
        ...state,
        album: reducerUtils.loading()
      }
    case GET_ALBUM_SUCCESS:
      return{
        ...state,
        album: reducerUtils.success(action.album)
      }
    case GET_ALBUM_ERROR:
      return{
        ...state,
        album: reducerUtils.error(action.error)
      }
    default:
      return state;
  }
}