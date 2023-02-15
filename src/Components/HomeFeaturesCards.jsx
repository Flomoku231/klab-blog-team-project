import React from "react";
import PropTypes from 'prop-types';
import '../Styles/Component-styles/HomeFeaturesCards.css'
import { useState } from "react";

export const HomeFeaturesCards = ({FeatureImage, Title, SubTitle}) =>{
    const [overlayHide, setOverlayHide] = useState(false);

    const HideOverlay = ()=>{
        setOverlayHide(!overlayHide)
    }

    return(
        <div className="features__card--container" onMouseEnter={HideOverlay} onMouseLeave={HideOverlay}>
            <div className={`Feature__image--overlay ${overlayHide ? 'overlayHide' :'' }`}></div>
            <img className="feature__image" src={FeatureImage} alt="" />
            <span className="features__card--text">
                <h1>{Title}</h1>
                <p>{SubTitle}</p>
            </span>
        </div>
    )
}

HomeFeaturesCards.prototype = {
    FeatureImage: PropTypes.string.isRequired,
    Title: PropTypes.string.isRequired,
    SubTitle: PropTypes.string,
}