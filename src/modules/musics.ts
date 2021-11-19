// import * as postApi from '../api/album';
// import { createAlbumsPromiseThunk, handleAlbumsAsyncActions, reducerUtils } from '../lib/asyncUtils';
import { AxiosError } from 'axios';
import { deprecated, ActionType, createReducer, createAsyncAction } from 'typesafe-actions';
import * as postApi from '../api/album';
import { ArtistName} from './artistNameTypes';
import { AlbumName } from './albumNameTypes';
import { ThunkAction } from 'redux-thunk';
import { RootState } from '.';
const { createAction, createStandardAction } = deprecated;

const GET_ALBUMS_ARTISTNAME = 'GET_ALBUMS_ARTISTNAME';
const GET_ALBUMS_ARTISTNAME_SUCCESS = 'GET_ALBUMS_ARTISTNAME_SUCCESS';
const GET_ALBUMS_ARTISTNAME_ERROR = 'GET_ALBUMS_ARTISTNAME_ERROR';

const getAlbumsArtistNameAsync = createAsyncAction(
  GET_ALBUMS_ARTISTNAME,
  GET_ALBUMS_ARTISTNAME_SUCCESS,
  GET_ALBUMS_ARTISTNAME_ERROR
)<undefined, ArtistName, AxiosError>();

type AlbumArtistNameAction = ActionType<typeof getAlbumsArtistNameAsync>;

const GET_ALBUMS_ALBUMNAME = 'GET_ALBUMS_ALBUMNAME';
const GET_ALBUMS_ALBUMNAME_SUCCESS = 'GET_ALBUMS_ALBUMNAME_SUCCESS';
const GET_ALBUMS_ALBUMNAME_ERROR = 'GET_ALBUMS_ALBUMNAME_ERROR';

const getAlbumsAlbumNameAsync = createAsyncAction(
  GET_ALBUMS_ALBUMNAME,
  GET_ALBUMS_ALBUMNAME_SUCCESS,
  GET_ALBUMS_ALBUMNAME_ERROR
)<undefined, AlbumName, AxiosError>();

type AlbumAlbumNameAction = ActionType<typeof getAlbumsAlbumNameAsync>;


const GET_ALBUM = 'GET_ALBUM';
const GET_ALBUM_SUCCESS = 'GET_ALBUM_SUCCESS';
const GET_ALBUM_ERROR = 'GET_ALBUM_ERROR';

export const getAlbumsArtistName = (searchText: string): ThunkAction<void, RootState, null, AlbumArtistNameAction> => async (dispatch) => {
  const { request, success, failure } = getAlbumsArtistNameAsync;
  dispatch(request());
  try{
    const albums = await postApi.getAlbumsArtistName(searchText);
    dispatch(success(albums));
  }
  catch(e) { 
    dispatch(failure(e))
  }
}

export const getAlbumsAlbumName = (searchText: string): ThunkAction<void, RootState, null, AlbumAlbumNameAction> => async (dispatch) => {
  const { request, success, failure } = getAlbumsAlbumNameAsync;
  dispatch(request());
  try{
    const musics = await postApi.getAlbumsAlbumName(searchText);
    dispatch(success(musics));
  }
  catch(e) {
    dispatch(failure(e))
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