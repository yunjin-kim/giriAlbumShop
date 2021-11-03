const PAY_ALBUM_CART = 'PAY_ALBUM_CART';

export const payAlbumCart = (pay) => ({
  type: PAY_ALBUM_CART,
  pay
})

const initialState = [];

export default function pay(state = initialState, action) {
  switch(action.type){
    case PAY_ALBUM_CART:
      return state.concat(action.pay)
    default:
      return state;
  }
}