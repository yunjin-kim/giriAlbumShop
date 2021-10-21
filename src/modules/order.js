const ORDER_ALBUM_CART = 'ORDER_ALBUM_CART';

export const orderAlbumCart = (cart) => ({
  type: ORDER_ALBUM_CART,
  cart
})

const inititalState = [];

export default function order(state = inititalState, action){
  switch(action.type){
    case ORDER_ALBUM_CART:
      return state.concat(action.cart);
    default:
      return state;
  }
}