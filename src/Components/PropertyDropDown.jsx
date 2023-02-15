import React from "react";
import '../Styles/Component-styles/PropertyDropDown.css'
import { Link } from "react-router-dom";

export const PropertyDropDown = ()=>{
    return (
    <div className='search__dropdown'  >
        <ul className="dropDown__list">
        <Link className='NavLink' to='/executiveHouse' > <li>Our Executive Listing</li></Link>
        <Link className='NavLink'><li>Open Houses</li></Link>
        </ul>
    </div>
    )
}