import { combineReducers } from "redux";
import RestaurantCategory from "./Reducer/RestaurantCategory";
import Addresses from "./Reducer/Addresses";
import Branches from "./Reducer/Branches";
import Restaurant from "./Reducer/Restaurant";
import Menu from "./Reducer/Menu";
import MenuItems from "./Reducer/MenuItems";
import MenuCategory from "./Reducer/MenuCategory";
import CartSlice from "./Reducer/ cartSlice";
// import ShoppingCart from "./Reducer/ShoppingCart";

const rootReducer = () =>
  combineReducers({
    product: Restaurant,
    address: Addresses,
    branch: Branches,
    category: RestaurantCategory,
    Menu:Menu,
    MenuItems:MenuItems,
    MenuCategory:MenuCategory,
    CartSlice: CartSlice,
    
  
  });

export default rootReducer;
