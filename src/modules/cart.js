const ADD_ALBUM_CART = 'ADD_ALBUM_CART';
const DELETE_ALBUM_CART = 'DELETE_ALBUM_CART';

export const addAlbumCart = (album) => ({
  type: ADD_ALBUM_CART,
  album
});

export const deleteAlbumCart = (name) => ({
  type: DELETE_ALBUM_CART,
  name
});

const initialState = [];

console.log(initialState)

export default function cart(state = initialState, action){
  switch(action.type){
    case ADD_ALBUM_CART:
      return state.concat(action.album);
    case DELETE_ALBUM_CART:
      return state.filter((album)=>(
        album.name === action.name
      ));
    default:
      return state;
  }
}