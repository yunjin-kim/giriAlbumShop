const PAY_ALBUM_CART = 'PAY_ALBUM_CART';

const date = new Date;

export const payAlbumCart = (pay) => ({
  type: PAY_ALBUM_CART,
  pay
})

const initialState = [];

const albumArr = [];

export default function pay(state = initialState, action){
  switch(action.type){
    case PAY_ALBUM_CART:
      return state.concat(action.pay)
      // state.concat(
      //   albumArr.concat(
      //     action.pay,
      //     action.pay.date = date.getMinutes()
      //     ),
      //   )
    default:
      return state;
  }
}

// [
//   date.getFullYear(),
//   date.getMonth(),
//   date.getDate(),
//   date.getHours(),
//   date.getMinutes()
// ]