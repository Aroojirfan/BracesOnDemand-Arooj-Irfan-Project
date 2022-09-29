import Restaurants from "../store/DB/RestaurantData";
import Addresses from "../store/DB/Addresses";
import { parseQueryString } from "./ApiUtils";
import BranchesFoodApp from "../store/DB/BranchesFoodApp";
import MenuCategory from "../store//DB/MenuCategory";
import MenuItems from "../store/DB/MenuItems";
import RestaurantCategory from "../store/DB/RestaurantCategory";
import Menu from "../store/DB/Menu";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";

const mock = new MockAdapter(axios);
export const restaurantCategory = mock.onGet("/restaurantCategory").reply(200, {
  RestaurantCategory,
});

export const restaurant = mock.onGet(/restaurant?(.*)/).reply((config) => {
  const { city } = parseQueryString(config.url);
  return [200, Restaurants?.filter((e) => String(e.Cityid) === (city || "1"))];
});

export const addresses = mock.onGet("/addresses").reply(200, {
  Addresses,
});
export const branches = mock.onGet("/branches").reply(200, {
  BranchesFoodApp,
});
export const menu = mock.onGet("/menu").reply(200, {
  Menu,
});
export const menuCategory = mock.onGet("/menuCategory").reply(200, {
  MenuCategory,
});
export const menuItems = mock.onGet("/menuItems").reply(200, {
  MenuItems,
});
