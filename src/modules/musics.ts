import { AxiosError } from 'axios';
import { ActionType, createAsyncAction } from 'typesafe-actions';
import * as postApi from '../api/album';
import { ArtistName, Album}  from './artistNameTypes';
import { AlbumName } from './albumNameTypes';
import { ThunkAction } from 'redux-thunk';
import { RootState } from '.';

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

const getAlbumAsync = createAsyncAction(
  GET_ALBUM,
  GET_ALBUM_SUCCESS,
  GET_ALBUM_ERROR
)<undefined, Album, AxiosError>();

type AlbumAction = ActionType<typeof getAlbumAsync>;

export const getAlbumsArtistName = (searchText: string): ThunkAction<void, RootState, null, AlbumArtistNameAction> => async (dispatch) => {
  const { request, success, failure } = getAlbumsArtistNameAsync;
  dispatch(request());
  try{
    const payload = await postApi.getAlbumsArtistName(searchText);
    dispatch(success(payload));
  }
  catch(e: any) { 
    dispatch(failure(e))
  }
}

export const getAlbumsAlbumName = (searchText: string): ThunkAction<void, RootState, null, AlbumAlbumNameAction> => async (dispatch) => {
  const { request, success, failure } = getAlbumsAlbumNameAsync;
  dispatch(request());
  try{
    const payload = await postApi.getAlbumsAlbumName(searchText);
    dispatch(success(payload));
  }
  catch(e: any) {
    dispatch(failure(e))
  }
}

export const getAlbum = (url: string): ThunkAction<void, RootState, null, AlbumAction> => async (dispatch) => {
  const { request, success, failure } = getAlbumAsync;
  dispatch(request());
  try {
    const payload = await postApi.getAlbum(url);
    dispatch(success(payload))
  }
  catch (e: any) {
    dispatch(failure(e))
  }
}

type AlbumState = {
  albums: {
    loading: boolean;
    data: ArtistName | null;
    error: Error | null;
  },
  musics: {
    loading: boolean;
    data: AlbumName | null;
    error: Error | null;
  },
  album: {
    loading: boolean;
    data: Album | null;
    error: Error | null;
  }
}

const initialState: AlbumState = {
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

export default function albums(state: AlbumState = initialState, action: AlbumArtistNameAction | AlbumAlbumNameAction | AlbumAction) {
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
          data: action.payload,
          error: null
        }
      }
    case GET_ALBUMS_ARTISTNAME_ERROR:
      return{
        ...state,
        albums: {
          loading: false,
          data: null,
          error: action.payload
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
          data: action.payload,
          error: null
        }
      }
    case GET_ALBUMS_ALBUMNAME_ERROR:
      return{
        ...state,
        musics: {
          loading: false,
          data: null,
          error: action.payload
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
          data : action.payload,
          error: null
        }
      }
    case GET_ALBUM_ERROR:
      return{
        ...state,
        album: {
          loading: false,
          data: null,
          error: action.payload
        }
      }
    default:
      return state;
  }
}