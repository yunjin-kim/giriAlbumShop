import axios from "axios";

const GET_ALBUMS = 'GET_ALBUMS';
const GET_ALBUMS_SUCCESS = 'GET_ALBUMS_SUCCESS';
const GET_ALBUMS_ERROR = 'GET_ALBUMS_ERROR';

const GET_ALBUM = 'GET_ALBUM';
const GET_ALBUM_SUCCESS = 'GET_ALBUM_SUCCESS';
const GET_ALBUM_ERROR = 'GET_ALBUM_ERROR';

export const getAlbums = (searchText) => async (dispatch) => {
  dispatch({type: GET_ALBUMS});
  try{
    const albums = await axios.get(`http://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=${searchText}&api_key=4eaa2e6cafb967fa096e6d2e3dec0344&format=json`);
    dispatch({type: GET_ALBUMS_SUCCESS, albums});
  }
  catch(e){
    dispatch({type: GET_ALBUMS_ERROR, error: e})
  }
}

export const getAlbum = (url) => async (dispatch) => {
  dispatch({type: GET_ALBUM});
  try{
    console.log(url)
    const urlArtist = url.match(/.+(?=:)/gm)[0];
    const urlAlumName = url.match(/(?<=:)[^]+/gm)[0];
    const albums = await axios.get(`http://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=${urlArtist}&api_key=4eaa2e6cafb967fa096e6d2e3dec0344&format=json`);
    const album = albums.data.topalbums.album.find(data => data.name === urlAlumName)
    dispatch({type: GET_ALBUM_SUCCESS, album});
  }
  catch(e){
    dispatch({type: GET_ALBUM_ERROR, error: e})
  }
}

const initialState = {
  albums: {
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
          data: action.albums,
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