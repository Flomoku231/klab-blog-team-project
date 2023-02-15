import React from "react";
import { Link } from "react-router-dom";
import '../Styles/Component-styles/PropertyDropDown.css'

export const CommunityDropDown =()=>{
    return(
        <div className='Community__dropdown'  >
            <ul className="dropDown__list">
            <Link className='NavLink' > <li>La Jolla</li></Link>
            </ul>
        </div>
    )
}