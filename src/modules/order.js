const ORDER_ALBUM_CART = 'ORDER_ALBUM_CART';
const LEAVE_ORDER_PAGE = 'LEAVE_ORDER_PAGE';

export const orderAlbumCart = (order) => ({
  type: ORDER_ALBUM_CART,
  order
})

export const leaveOrderPage = () => ({
  type: LEAVE_ORDER_PAGE
})

const inititalState = [];

export default function order(state = inititalState, action) {
  switch(action.type){
    case ORDER_ALBUM_CART:
      return state.concat(action.order);
    case LEAVE_ORDER_PAGE:
      state.splice(0, state.length);
    default:
      return state;
  }
}