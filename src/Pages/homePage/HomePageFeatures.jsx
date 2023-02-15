import React from "react";
import { HomeFeaturesCards } from "../../Components/HomeFeaturesCards";
import Zoom from 'react-awesome-reveal'
import HotelImage from '../../Assets/Images/hotel1.jpg';
import '../../Styles/Pages-styles/homePage/HomePageFeatures.css'

export const HomePageFeatures = ()=>{
    return(
        <div className="features__container">
            <div className="features__header">
                <Zoom left>
                <h1>Luxury At it Finest</h1>
                <h2>Featured Communities</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut incidunt ab accusantium itaque eius molestiae! 
                    Lorem ipsum dolor sit  perferendis natus possimus. Dolore aut itaque quibusdam cumque. Nobis nihil odit natus 
                    cumque pariatur! Maxime doloremque atque vero!</p>
                    </Zoom>
            </div>
            <div className="features__body--cards">
                
                <HomeFeaturesCards
                    FeatureImage = {HotelImage}
                    Title = {'Rasheco Sante Fe'}
                    SubTitle = {'Sprawling Estates'}
                />
                <HomeFeaturesCards
                    FeatureImage = {HotelImage}
                    Title = {'Rasheco Sante Fe'}
                    SubTitle = {'Sprawling Estates'}
                />
                <HomeFeaturesCards
                    FeatureImage = {HotelImage}
                    Title = {'Rasheco Sante Fe'}
                    SubTitle = {'Sprawling Estates'}
                />
                 <HomeFeaturesCards
                    FeatureImage = {HotelImage}
                    Title = {'Rasheco Sante Fe'}
                    SubTitle = {'Sprawling Estates'}
                />
                <HomeFeaturesCards
                    FeatureImage = {HotelImage}
                    Title = {'Rasheco Sante Fe'}
                    SubTitle = {'Sprawling Estates'}
                />
                <HomeFeaturesCards
                    FeatureImage = {HotelImage}
                    Title = {'Rasheco Sante Fe'}
                    SubTitle = {'Daniel'}
                />
                <div className="Exploremore--cards">
                    <button className="Explore__button">Explore More</button>
                </div>
            </div>
        </div>
    )
}