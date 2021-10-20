import { combineReducers } from "redux";
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import albums from "./musics";
import cart from "./cart";

const persistConfig = {
  key: 'cart',
  storage,
  whitelist: ["cart"]
}

const rootReducer = combineReducers({
  albums,
  cart
});

export default persistReducer(persistConfig, rootReducer);