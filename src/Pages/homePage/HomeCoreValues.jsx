import React from "react";
import CodeValuesCards from "../../Components/CodeValuesCards";
import Bookerage from '../../Assets/Icon/bookerage.svg'
import TeamWork from '../../Assets/Icon/teamwork.svg'
import World from '../../Assets/Icon/world.svg'
import Love from '../../Assets/Icon/love.svg'
import '../../Styles/Pages-styles/homePage/HomeCoreValues.css'

export const HomeCoreValues =()=>{
    return (
        <div className="core__values--container">
            <div className="values__cards--container">
                <CodeValuesCards
                    Icon = {Bookerage}
                    Title = {'Top Rated Brokerage'}
                    Description = {'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin gravida tortor semper nibh vehicula, in tempor urna dignissim. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices.'}
                />
                  <CodeValuesCards
                    Icon = {TeamWork}
                    Title = {'Top Rated Brokerage'}
                    Description = {'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin gravida tortor semper nibh vehicula, in tempor urna dignissim. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices.'}
                />
                  <CodeValuesCards
                    Icon = {World}
                    Title = {'Top Rated Brokerage'}
                    Description = {'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin gravida tortor semper nibh vehicula, in tempor urna dignissim. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices.'}
                />
                  <CodeValuesCards
                    Icon = {Love}
                    Title = {'Top Rated Brokerage'}
                    Description = {'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin gravida tortor semper nibh vehicula, in tempor urna dignissim. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices.'}
                />
            </div>
        </div>
    )
}