const ADD_ALBUM_CART = 'ADD_ALBUM_CART';
const DELETE_ALBUM_CART = 'DELETE_ALBUM_CART';
const TOGGLE_ALBUM_CART = 'TOGGLE_ALBUM_CART';
const INCREASE_ALBUM = 'INCREASE_ALBUM';
const DECREASE_ALBUM = 'DECREASE_ALBUM';

export const addAlbumCart = (album) => ({
  type: ADD_ALBUM_CART,
  album
});

export const deleteAlbumCart = (name) => ({
  type: DELETE_ALBUM_CART,
  name
});

export const toggleAlbumCart = (name) => ({
  type: TOGGLE_ALBUM_CART,
  name,
})

export const increaseAlbumCart = (count) => ({
  type: INCREASE_ALBUM,
  count
})

export const decreaseAlbumCart = (count) => ({
  type: DECREASE_ALBUM,
  count
})

const initialState = [];

export default function cart(state = initialState, action){
  switch(action.type){
    case ADD_ALBUM_CART:
      return state.concat(action.album)
      //  state.map((album)=>(
        // !state ? (album.name === action.album.name ? "" : state.concat(action.album) ) : state.concat(action.album)
      // ))
    case DELETE_ALBUM_CART:
      return state.filter((album)=>(
        album.name !== action.name
      ));
    case TOGGLE_ALBUM_CART:
      return state.map((album)=>(
        album.name === action.name ? {...album, click: !album.click}: album
      ))
    case INCREASE_ALBUM:
      return state.map((cart)=>(
        cart.name === action ? action.count+1 : ""
      ))
    case DECREASE_ALBUM:
      return state.count - 1
    default:
      return state;
  }
}