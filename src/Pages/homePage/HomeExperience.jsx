import React from "react";
import { HomeExperienceCards } from "../../Components/HomeExperienceCards";
import Roll from 'react-awesome-reveal';
import '../../Styles/Pages-styles/homePage/HomeExperience.css'

export const HomeExperience =()=>{
    return(

        <div className="HomeExperience__container">
            <div className="HomeExperience__cards">
            <Roll left>
                <HomeExperienceCards
                    Title = {'45 Years Of Experience'}
                    Paragraph = {'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin gravida tortor semper nibh vehicula, in tempor urna dignissim. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices.'}
                />
            </Roll>
            <Roll left>
                <HomeExperienceCards
                    Title = {'$125 Billion In Sales'}
                    Paragraph = {'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin gravida tortor semper nibh vehicula, in tempor urna dignissim. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices.'}
                />
                </Roll>
                <Roll right>
                <HomeExperienceCards
                    Title = {'Tailormade End-To-End Service'}
                    Paragraph = {'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin gravida tortor semper nibh vehicula, in tempor urna dignissim. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices.'}
                />
                </Roll>
                
            </div>
        </div>
    )
}