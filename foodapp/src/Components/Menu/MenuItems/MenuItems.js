import React, { useEffect, useState } from "react";
import "./MenuItems.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchMenuItems } from "../../../store/Reducer/MenuItems";
import { STATUSES } from "../../../store/Reducer/MenuItems";
import MenuItemList from "./MenuItemList";
import MenuCategory from "./MenuCategory/MenuCategory";
const MenuItems = ({ menuItemsId }) => {
  const [menuItemsdata, setMenuItemsdata] = useState([]);
  const [navMenuItemList, setNavMenuItemList] = useState([]);
  const { data, status } = useSelector((state) => state.MenuItems);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMenuItems());
  }, []);

  if (status === STATUSES.LOADING) {
    <h2>Loading....</h2>;
  }

  if (status === STATUSES.ERROR) {
    <h2>Something went wrong!</h2>;
  }

  const menuItemsFiltered = menuItemsId?.map((e) =>
    data.MenuItems?.filter((cur) => e == cur.Mid)
  );
  useEffect(() => {
    setMenuItemsdata(menuItemsFiltered);
    setNavMenuItemList([
      ...new Set(
        menuItemsFiltered?.map((e) => e?.map(({ category }) => category))
      ),
    ]);
  }, []);
  const categoryFilter = (itemData) => {
    const filterData = menuItemsFiltered?.map((e) =>
      e.filter(({ category }) => itemData == category)
    );
    const filterdSingleCategory = filterData?.filter((e) => e != "");
    setMenuItemsdata(filterdSingleCategory);
  };

  return (
    <div className="menuItems">
      <MenuCategory
        navMenuItemList={navMenuItemList}
        categoryFilter={categoryFilter}
        menuItemsFiltered={menuItemsFiltered}
        setMenuItemsdata={setMenuItemsdata}
      />
      <h1>All Menu Items</h1>
      <section className="main-card--cointainer2">
        {menuItemsdata?.map((e, index) => (
          <div className="categorybox" key={index}>
            {e?.map(({ Mid, category, items }) => (
              <div className="card-container1" key={`menus-${Mid}`}>
                <h2>{category}</h2>
                {items?.map(({ id, image, name, description, price }) => (
                  <MenuItemList
                    key={`menuItemscom-${id}`}
                    id={id}
                    image={image}
                    description={description}
                    price={price}
                    name={name}
                  />
                ))}
              </div>
            ))}
          </div>
        ))}
      </section>
    </div>
  );
};

export default MenuItems;
