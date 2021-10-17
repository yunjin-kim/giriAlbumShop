import { getMusics } from "../api/albums";

const GET_ALBUMS = 'GET_ALBUMS';
const GET_ALBUMS_SUCCESS = 'GET_ALBUMS_SUCCESS';
const GET_ALBUMS_ERROR = 'GET_ALBUMS_ERROR';

export const getAlbums = () => async dispatch => {
  dispatch({type: GET_ALBUMS});
  try{
    const albums = await getMusics();
    dispatch({type: GET_ALBUMS_SUCCESS, albums});
  }
  catch(e){
    dispatch({type: GET_ALBUMS_ERROR, error: e})
  }
}

const initialState = {
  albums: {
    loading: false,
    data: null,
    error: null
  }
}

export default function albums(state = initialState, action){
  switch(action.type){
    case GET_ALBUMS:
      return{
        ...state,
        albums: {
          loading: true,
          data: null,
          error: null
        }
      }
    case GET_ALBUMS_SUCCESS:
      return{
        ...state,
        albums: {
          loading: false,
          data: action.data,
          error: null
        }
      }
    case GET_ALBUMS_ERROR:
      return{
        ...state,
        albums: {
          loading: false,
          data: null,
          error: action.error
        }
      }
    default:
      return state;
  }
}