import { AlbumAlbum } from "./albumNameTypes";

const PAY_ALBUM_CART = 'PAY_ALBUM_CART' as const;

export const payAlbumCart = (pay: AlbumAlbum) => ({
  type: PAY_ALBUM_CART,
  pay
})

type PayAction = 
  | ReturnType<typeof payAlbumCart>;

type PayState = AlbumAlbum[];

const initialState: PayState = [];

export default function pay(state: PayState = initialState, action: PayAction) {
  switch(action.type){
    case PAY_ALBUM_CART:
      return state.concat(action.pay)
    default:
      return state;
  }
}