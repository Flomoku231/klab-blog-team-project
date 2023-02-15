import React from 'react'
import '../Styles/Component-styles/DashboardComponentCards.css'

export const DashboardComponentCards = ({Title,Quantity, Rating, Duration, Icons}) => {
  return (
    <div className='componentCards__container'>
        <div className="componentCards__left">
            <h1>{Title}</h1>
            <div className="left--footer">
            <h2>{Quantity}</h2> <span className='rating__container'><p>{Rating}</p><p id='duration--content'>{Duration}</p></span>
            </div>
            
        </div>
        <div className="componentCards__right">
          <div className="right--content">
            {Icons}
          </div>
        </div>
    </div>
  )
}
