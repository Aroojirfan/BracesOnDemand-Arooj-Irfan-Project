import React from 'react'
import "./MenuCategory.css"
const MenuCategory = ({navMenuItemList,categoryFilter,menuItemsFiltered, setMenuItemsdata}) => 
    <div className="filterItem">
    <ul>
      <li><button onClick={()=>  setMenuItemsdata(menuItemsFiltered)} >All</button></li>
      {
        navMenuItemList.map((item,Mid)=> <li key={Mid} ><button onClick={()=>{categoryFilter(item)}}>{item}</button></li>)
      }
    </ul>
  </div>

export default MenuCategory
