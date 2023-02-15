import React from "react";
import '../Styles/Component-styles/TestimoniaCards.css'


export const TestimonialCards = ({Quote, Name, Image})=>{
    return(
        <div className="testimonialCard__container">
            <p><q>{Quote}</q></p>
            <h2>{Name}</h2>
            <img src={Image} alt="" />
        </div>
    )
}