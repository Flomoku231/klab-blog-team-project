import React from "react";
import { Link } from "react-router-dom";
import '../Styles/Component-styles/PropertyDropDown.css'

export const ServicesMenuDropDown = ()=>{
    return(
        <div className='Services__dropdown'  >
            <ul className="dropDown__list">
            <Link className='NavLink' > <li>Home Valuation</li></Link>
        </ul>
    </div>
    )
}