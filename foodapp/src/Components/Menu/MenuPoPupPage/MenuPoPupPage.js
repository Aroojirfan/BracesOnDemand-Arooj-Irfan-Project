import React from 'react'
import "./MenuPoPupPage.css"
const MenuPoPupPage = props => 
    <div className="popup-box">
    <div className="box">
      <span className="close-icon" onClick={props.handleClose}>x</span>
      {props.content}
    </div>
  </div>


export default MenuPoPupPage
