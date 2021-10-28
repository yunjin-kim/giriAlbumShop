import { combineReducers } from "redux";
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import albums from "./musics";
import cart from "./cart";
import order from "./order";
import pay from './pay';

const persistConfig = {
  key: 'cart',
  storage,
  whitelist: ["cart"],
}

const rootReducer = combineReducers({
  albums,
  cart,
  order,
  pay
});

export default persistReducer(persistConfig, rootReducer);