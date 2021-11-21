const SEARCH_ALBUM = 'SEARCH_ALBUM' as const;

export const searchAlbum = (searchText: string) => ({
  type: SEARCH_ALBUM,
  searchText,
});

type SearchAction = 
  | ReturnType<typeof searchAlbum>;

type SearchState = string;

const initialState: SearchState = "기리보이";

export default function search(state:SearchState = initialState, action: SearchAction) {
  switch(action.type){
    case SEARCH_ALBUM:
      return action.searchText;
    default:
      return state;
  }
}