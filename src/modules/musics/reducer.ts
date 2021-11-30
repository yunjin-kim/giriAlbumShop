import { AlbumState } from './types';
import { AlbumArtistNameAction, AlbumAlbumNameAction, AlbumAction } from './types';
import { reducerUtils, handleAlbumsAsyncActions } from '../../lib/asyncUtils';
import { GET_ALBUMS_ARTISTNAME, GET_ALBUMS_ARTISTNAME_SUCCESS, GET_ALBUMS_ARTISTNAME_ERROR, 
          GET_ALBUMS_ALBUMNAME, GET_ALBUMS_ALBUMNAME_SUCCESS, GET_ALBUMS_ALBUMNAME_ERROR,
          GET_ALBUM, GET_ALBUM_SUCCESS, GET_ALBUM_ERROR } from './actions';

const initialState: AlbumState = {
  albums: reducerUtils.initial(),
  musics: reducerUtils.initial(),
  album: reducerUtils.initial()
}

export default function albums(state: AlbumState = initialState, action: AlbumArtistNameAction | AlbumAlbumNameAction | AlbumAction) {
  switch(action.type) {
    case GET_ALBUMS_ARTISTNAME:
    case GET_ALBUMS_ARTISTNAME_SUCCESS:
    case GET_ALBUMS_ARTISTNAME_ERROR:
      const artAlbumHandler = handleAlbumsAsyncActions(GET_ALBUMS_ARTISTNAME, 'albums', true);
      return artAlbumHandler(state, action);
    case GET_ALBUMS_ALBUMNAME:
    case GET_ALBUMS_ALBUMNAME_SUCCESS:
    case GET_ALBUMS_ALBUMNAME_ERROR:
      const albumAlbumHandler = handleAlbumsAsyncActions(GET_ALBUMS_ALBUMNAME, 'musics', true);
      return albumAlbumHandler(state, action);
    case GET_ALBUM:
      return{
        ...state,
        album: reducerUtils.loading()
      }
    case GET_ALBUM_SUCCESS:
      return{
        ...state,
        album: reducerUtils.success(action.payload)
      }
    case GET_ALBUM_ERROR:
      return{
        ...state,
        album: reducerUtils.error(action.payload)
      }
    default:
      return state;
  }
}