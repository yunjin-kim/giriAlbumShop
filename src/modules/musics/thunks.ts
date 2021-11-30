import * as postApi from '../../api/album';
import { ThunkAction } from 'redux-thunk';
import { getAlbumsArtistNameAsync, getAlbumsAlbumNameAsync, getAlbumAsync } from './actions';
import { RootState } from '../index';
import { AlbumArtistNameAction, AlbumAlbumNameAction, AlbumAction } from './types';

export const getAlbumsArtistName = (searchText: string): ThunkAction<void, RootState, any, AlbumArtistNameAction> => async (dispatch) => {
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