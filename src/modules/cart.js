import { PURGE } from "redux-persist/es/constants";

const ADD_ALBUM_CART = 'ADD_ALBUM_CART';
const DELETE_ALBUM_CART = 'DELETE_ALBUM_CART';
const TOGGLE_ALLALBUM_CART = 'TOGGLE_ALLALBUM_CART';
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

export const toggleAllAlbumCart = (cartAlbum) => ({
  type: TOGGLE_ALLALBUM_CART,
  cartAlbum,
})

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

export default function cart(state = initialState, action) {
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
            "hour": "",
            "minute": "",
            "second": "",
          },
          check: true,
        }
      ]
    case DELETE_ALBUM_CART:
      return state.filter((album) => (
        album.album.name !== action.name
      ));
    case TOGGLE_ALLALBUM_CART: //되긴하는데 화면에서 채크박스가 바뀌지는 않는다
      return state.map((album) => (
        album.check ? {...album, check: !album.check} : {...album, check: !album.check}
      ))
      // return state.map((album) => (
      //   album ? {...album, check: !album.check} : album
      // ))
    case TOGGLE_ALBUM_CART:
      return state.map((album) => (
        album.album.name === action.name ? {...album, check: !album.check}: album
      ))
    case INCREASE_ALBUM:
      return state.map((album) => (
        album.name === action.name ? album.count : album
      ))
    case DECREASE_ALBUM:
      return state.map((album) => (
        album.name === action.name ? album.count : album
      ))
    case PURGE:
      return initialState;
    default:
      return state;
  }
}
// import { deprecated, ActionType, createReducer } from 'typesafe-actions';
// import { AlbumAlbum } from "./albumNameTypes";

// const { createAction, createStandardAction } = deprecated;


// const ADD_ALBUM_CART = 'ADD_ALBUM_CART';
// const DELETE_ALBUM_CART = 'DELETE_ALBUM_CART';
// const TOGGLE_ALLALBUM_CART = 'TOGGLE_ALLALBUM_CART';
// const TOGGLE_ALBUM_CART = 'TOGGLE_ALBUM_CART';
// const INCREASE_ALBUM = 'INCREASE_ALBUM';
// const DECREASE_ALBUM = 'DECREASE_ALBUM';

// export const addAlbumCart = createStandardAction(ADD_ALBUM_CART)<AlbumAlbum>();
// export const deleteAlbumCart = createStandardAction(DELETE_ALBUM_CART)<string>();
// export const toggleAllAlbumCart = createStandardAction(TOGGLE_ALLALBUM_CART)<AlbumAlbum>();
// export const toggleAlbumCart = createStandardAction(TOGGLE_ALBUM_CART)<string>();
// export const increaseAlbumCart = createStandardAction(INCREASE_ALBUM)<string>();
// export const decreaseAlbumCart = createStandardAction(DECREASE_ALBUM)<string>();
// // export const pergeAction = createStandardAction(PURGE_ACTION)();

// const actions = {
//   addAlbumCart,
//   deleteAlbumCart,
//   toggleAllAlbumCart,
//   toggleAlbumCart,
//   increaseAlbumCart,
//   decreaseAlbumCart,
//   // pergeAction
// }

// type CartActions = ActionType<typeof actions>

// type CartState = AlbumAlbum[];

// const initialState: CartState = [];

// export default function cart(state: CartState = initialState, action: CartActions) {
//   switch(action.type){
//     case ADD_ALBUM_CART:
//       return [
//         ...state,
//         {
//           album: action.payload,
//           count: 1,
//           date: {
//             "year": "",
//             "month": "",
//             "date": "",
//             "hour": "",
//             "minute": "",
//             "second": "",
//           },
//           check: true,
//         }
//       ]
//     case DELETE_ALBUM_CART:
//       return state.filter((album) => (
//         album.name === action.payload
//       ));
//     case TOGGLE_ALLALBUM_CART: //되긴하는데 화면에서 채크박스가 바뀌지는 않는다
//       return state.map((album) => (
//         album.check ? {...album, check: !album.check} : {...album, check: !album.check}
//       ))
//       // return state.map((album) => (
//       //   album ? {...album, check: !album.check} : album
//       // ))
//     case TOGGLE_ALBUM_CART:
//       return state.map((album) => (
//         album.name === action.payload ? {...album, check: !album.check}: album
//       ))
//     case INCREASE_ALBUM:
//       return state.map((album) => (
//         album.name === action.payload ? album.count : album
//       ))
//     case DECREASE_ALBUM:
//       return state.map((album) => (
//         album.name === action.payload ? album.count : album
//       ))
//     // case PURGE:
//     //   return initialState;
//     default:
//       return state;
//   }
// }