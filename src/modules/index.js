import { combineReducers } from "redux";
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import albums from "./musics";
import cart from "./cart";
import order from "./order";
import pay from './pay';
import search from './search';

const persistConfig = {
  key: 'cart',
  storage,
  whitelist: ["cart", "pay"],
}

const rootReducer = combineReducers({
  albums,
  cart,
  order,
  pay,
  search,
});

export default persistReducer(persistConfig, rootReducer);