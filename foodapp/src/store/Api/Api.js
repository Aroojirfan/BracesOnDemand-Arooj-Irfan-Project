import Restaurant from "../DB/RestaurantData";
import Addresses from "../DB/Addresses";
import BranchesFoodApp from "../DB/BranchesFoodApp";
import MenuCategory from "../DB/MenuCategory";
import MenuItems from "../DB/MenuItems";
import RestaurantCategory from "../DB/RestaurantCategory";
import Menu from "../DB/Menu";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";

const mock = new MockAdapter(axios);
export const restaurant = mock.onGet("/restaurant").reply(200, {
  Restaurant,
});
export const restaurantCategory = mock.onGet("/restaurantCategory").reply(200, {
  RestaurantCategory,
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
