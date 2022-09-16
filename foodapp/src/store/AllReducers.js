import { combineReducers } from "redux";
import RestaurantCategory from "./Reducer/RestaurantCategory";
import Addresses from "./Reducer/Addresses";
import Branches from "./Reducer/Branches";
import Restaurant from "./Reducer/Restaurant";
const rootReducer = () =>
  combineReducers({
    product: Restaurant,
    address:Addresses,
    branch:Branches,
   category:RestaurantCategory,
    

  });

export default rootReducer;