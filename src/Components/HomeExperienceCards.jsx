import React from "react";
import '../Styles/Component-styles/HomeExperienceCards.css'
import PropTypes from 'prop-types';
import { useState } from "react";


export const HomeExperienceCards =({Title, Paragraph})=>{
    const [hoverShadow, setHoverShadow] = useState(false)

    const ShadowDisplay = ()=>{
        setHoverShadow(!hoverShadow)
    }
    return(
    <div className={`HomeExprereinceCards__container ${hoverShadow ? 'hoverShadow__display' : ''}`} onMouseEnter = {ShadowDisplay} onMouseLeave={ShadowDisplay}>
            <h1>{Title}</h1>
            <p>{Paragraph}</p>
        </div>
    )
}

HomeExperienceCards.prototype = {
    Title: PropTypes.string.isRequired,
    Paragraph: PropTypes.string.isRequired,
}