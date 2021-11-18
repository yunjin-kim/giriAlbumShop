// import * as postApi from '../api/album';
// import { createAlbumsPromiseThunk, handleAlbumsAsyncActions, reducerUtils } from '../lib/asyncUtils';
import { deprecated, ActionType, createReducer } from 'typesafe-actions';
import * as postApi from '../api/album';
const { createAction, createStandardAction } = deprecated;

const GET_ALBUMS_ARTISTNAME = 'GET_ALBUMS_ARTISTNAME' as const;
const GET_ALBUMS_ARTISTNAME_SUCCESS = 'GET_ALBUMS_ARTISTNAME_SUCCESS' as const;
const GET_ALBUMS_ARTISTNAME_ERROR = 'GET_ALBUMS_ARTISTNAME_ERROR' as const;

const GET_ALBUMS_ALBUMNAME = 'GET_ALBUMS_ALBUMNAME' as const;
const GET_ALBUMS_ALBUMNAME_SUCCESS = 'GET_ALBUMS_ALBUMNAME_SUCCESS' as const;
const GET_ALBUMS_ALBUMNAME_ERROR = 'GET_ALBUMS_ALBUMNAME_ERROR' as const;

const GET_ALBUM = 'GET_ALBUM' as const;
const GET_ALBUM_SUCCESS = 'GET_ALBUM_SUCCESS' as const;
const GET_ALBUM_ERROR = 'GET_ALBUM_ERROR' as const;

export const getAlbumsArtistName = (searchText: string) => async (dispatch) => {
  dispatch({type: GET_ALBUMS_ARTISTNAME});
  try{
    const albums = await postApi.getAlbumsArtistName(searchText);
    dispatch({type: GET_ALBUMS_ARTISTNAME_SUCCESS, albums});
  }
  catch(e) { 
    dispatch({type: GET_ALBUMS_ARTISTNAME_ERROR, error: e})
  }
}

export const getAlbumsAlbumName = (searchText: string) => async (dispatch) => {
  dispatch({type: GET_ALBUMS_ALBUMNAME});
  try{
    const musics = await postApi.getAlbumsAlbumName(searchText);
    dispatch({type: GET_ALBUMS_ALBUMNAME_SUCCESS, musics});
  }
  catch(e) {
    dispatch({type: GET_ALBUMS_ALBUMNAME_ERROR, error: e})
  }
}

export const getAlbum = (url: string) => async (dispatch) => {
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
  albums: {
    loading: false,
    data: null,
    error: null
  },
  musics: {
    loading: false,
    data: null,
    error: null
  },
  album: {
    loading: false,
    data: null,
    error: null
  }
}

export default function albums(state = initialState, action) {
  switch(action.type) {
    case GET_ALBUMS_ARTISTNAME:
      return{
        ...state,
        albums: {
          loading: true,
          data: null,
          error: null
        }
      }
    case GET_ALBUMS_ARTISTNAME_SUCCESS:
      return{
        ...state,
        albums: {
          loading: false,
          data: action.albums,
          error: null
        }
      }
    case GET_ALBUMS_ARTISTNAME_ERROR:
      return{
        ...state,
        albums: {
          loading: false,
          data: null,
          error: action.error
        }
      }
    case GET_ALBUMS_ALBUMNAME:
      return{
        ...state,
        musics: {
          loading: true,
          data: null,
          error: null
        }
      }
    case GET_ALBUMS_ALBUMNAME_SUCCESS:
      return{
        ...state,
        musics: {
          loading: false,
          data: action.musics,
          error: null
        }
      }
    case GET_ALBUMS_ALBUMNAME_ERROR:
      return{
        ...state,
        musics: {
          loading: false,
          data: null,
          error: action.error
        }
      }
    case GET_ALBUM:
      return{
        ...state,
        album: {
          loading: true,
          data: null,
          error: null
        }
      }
    case GET_ALBUM_SUCCESS:
      return{
        ...state,
        album: {
          loading: false,
          data : action.album,
          error: null
        }
      }
    case GET_ALBUM_ERROR:
      return{
        ...state,
        album: {
          loading: false,
          data: null,
          error: action.error
        }
      }
    default:
      return state;
  }
}