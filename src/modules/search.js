import { getMusics } from "../api/albums";

const SEARCH_ALBUM = 'SEARCH_ALBUM';

export const searchAlbum = (searchText) => ({
  type: SEARCH_ALBUM,
  searchText,
});

const initialState = "기리보이";

export default function search(state = initialState, action){
  switch(action.type){
    case SEARCH_ALBUM:
      getMusics(action.searchText);
    default:
      return state;
  }
}