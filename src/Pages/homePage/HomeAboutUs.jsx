import React from "react";
import '../../Styles/Pages-styles/homePage/HomeAboutUs.css'

export const HomeAboutUs = ()=>{
    return(
        <div className="HomeAboutUs__container">
            <div className="HomeAboutUs--left">
                <h1>A Real Estate Agency Leading The Luxury Properties Market Throughout The World</h1>
                <p>Blair Owens</p>
            </div>
            <div className="HomeAboutUs--right">
                <a href="#">About</a>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin gravida 
                    tortor semper nibh vehicula, in tempor urna dignissim. Vestibulum ante ipsum.</p>
            </div>
        </div>
    )
}