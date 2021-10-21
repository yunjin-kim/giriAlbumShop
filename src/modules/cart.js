const ADD_ALBUM_CART = 'ADD_ALBUM_CART';
const DELETE_ALBUM_CART = 'DELETE_ALBUM_CART';
const TOGGLE_ALBUM_CART = 'TOGGLE_ALBUM_CART';

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
  name
})


const initialState = [];

export default function cart(state = initialState, action){
  switch(action.type){
    case ADD_ALBUM_CART:
      return state.concat(action.album);
    case DELETE_ALBUM_CART:
      return state.filter((album)=>(
        album.name !== action.name
      ));
    case TOGGLE_ALBUM_CART:
      return state.map((album)=>(
        album.name === action.name ? {...album, click: !album.click}: album
      ))
    default:
      return state;
  }
}