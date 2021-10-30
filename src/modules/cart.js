import { PURGE } from "redux-persist/es/constants";


const ADD_ALBUM_CART = 'ADD_ALBUM_CART';
const DELETE_ALBUM_CART = 'DELETE_ALBUM_CART';
const TOGGLE_ALBUM_CART = 'TOGGLE_ALBUM_CART';
const INCREASE_ALBUM = 'INCREASE_ALBUM';
const DECREASE_ALBUM = 'DECREASE_ALBUM';

export const addAlbumCart = (album) => ({
  type: ADD_ALBUM_CART,
  album,
});

export const deleteAlbumCart = (name) => ({
  type: DELETE_ALBUM_CART,
  name,
});

export const toggleAlbumCart = (name) => ({
  type: TOGGLE_ALBUM_CART,
  name,
})

export const increaseAlbumCart = (name) => ({
  type: INCREASE_ALBUM,
  name,
})

export const decreaseAlbumCart = (name) => ({
  type: DECREASE_ALBUM,
  name,
})

const initialState = [];

export default function cart(state = initialState, action){
  switch(action.type){
    case ADD_ALBUM_CART:
      return [
        ...state,
        {
          album: action.album,
          count: 1,
          date: {
            "year": "",
            "month": "",
            "date": "",
          },
          check: false,
        }
      ]
    case DELETE_ALBUM_CART:
      return state.filter((album)=>(
        album.album.name !== action.name
      ));
    case TOGGLE_ALBUM_CART:
      return state.map((album)=>(
        album.name === action.name ? {...album, check: !album.check}: album
      ))
    case INCREASE_ALBUM:
      return state.map((album)=>(
        album.name === action.name ? album.count : album
      ))
    case DECREASE_ALBUM:
      return state.map((album)=>(
        album.name === action.name ? album.count : album
      ))
    case PURGE:
      return initialState;
    default:
      return state;
  }
}