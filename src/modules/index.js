import { combineReducers } from "redux";
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import albums from "./musics";
import cart from "./cart";
import order from "./order";

const persistConfig = {
  key: 'cart',
  storage,
  whitelist: ["cart"]
}

const rootReducer = combineReducers({
  albums,
  cart,
  order
});

export default persistReducer(persistConfig, rootReducer);