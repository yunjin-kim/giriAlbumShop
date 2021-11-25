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

// import { ActionType, createReducer } from "typesafe-actions";
// import { createAction } from "typesafe-actions/dist/deprecated/create-action";
// import { createStandardAction } from "typesafe-actions/dist/deprecated/create-standard-action";
// import { ArtAlbum } from "./artistNameTypes";
// import { AlbumAlbum } from "./albumNameTypes";

// const ORDER_ALBUM_CART = 'ORDER_ALBUM_CART' as const;
// const LEAVE_ORDER_PAGE = 'LEAVE_ORDER_PAGE' as const;

// type Order = {
//   order: ArtAlbum[] | AlbumAlbum[];
// }

// export const orderAlbumCart = (order: Order) => ({
//   type: ORDER_ALBUM_CART,
//   order
// })

// export const leaveOrderPage = () => ({
//   type: LEAVE_ORDER_PAGE
// })

// type OrderAction = 
//   | ReturnType<typeof orderAlbumCart>
//   | ReturnType<typeof leaveOrderPage>;

// type OrderState = AlbumAlbum[];

// const inititalState: OrderState = [];

// export default function order(state: OrderState = inititalState, action: OrderAction): OrderState {
//   switch(action.type){
//     case ORDER_ALBUM_CART:
//       return state.concat({action.order})
//     case LEAVE_ORDER_PAGE:
//       state.splice(0, state.length);
//     default:
//       return state;
//   }
// }
