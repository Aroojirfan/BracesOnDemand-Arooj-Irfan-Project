import { combineReducers } from "redux";
import Restaurant from "./Reducer/Restaurant";
import Addresses from "./Reducer/Addresses";
import Branches from "./Reducer/Branches";
const rootReducer = () =>
  combineReducers({
    product: Restaurant,
    address:Addresses,
    branch:Branches
  });

export default rootReducer;