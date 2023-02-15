import React from 'react'
import '../Styles/Component-styles/OpenHouseCards.css'
import PropTypes from 'prop-types'
import houseIcon from '../Assets/Icon/house.svg'
import reactionIcon from '../Assets/Icon/love.svg'
import addIcon from '../Assets/Icon/addition.svg'
import nextIcon from '../Assets/Icon/next.svg'
import calendarIcon from '../Assets/Icon/calendarIcon.svg'

const OpenHouseCards = ({saleImage, Sell, Category, Price,Bedroom ,Bathroom, Feet,PlaceLocation,PostedDate}) => {
  return (
    <div className='openHouseCards__container'>
        <div className="openHouseCards__header">
            <div className="header__buttons"><button type='click' className='forSale__button'>{Sell}</button>
            <button type='click' className='category__button'>{Category}</button></div>
            <div className="header__image"><img src={saleImage} alt="" /></div>
            <div className="openHouseCards__icons">
                    <button className="left__icon"><img src={houseIcon} alt="" /></button>
                    
                <div className="right__icons">
                    <button className='right_btn'><img src={reactionIcon} alt="" /></button>
                    
                    <button className='right_btn'><img src={addIcon} alt="" /></button>
                </div>
            </div>
        </div>
        <div className="openHouseCards__priceDetails">
            <div className="price__description">
                <h1>${Price}</h1>
                <div className="other--details">
                    <span className="Bedroom"><p>Bed</p> <p>{Bedroom}</p></span>
                    <span className="Bathroom"><p>Bathroom</p> <p>{Bathroom}</p></span>
                    <span className="Sq--feet"><p>Sq ft</p> <p>{Feet}</p></span>
                    
                </div>
            </div>
            <div className="openHouseCards__locationDetails">
                <p className="location">{PlaceLocation}</p>
                <button className="viewButton">View <img src={nextIcon} alt="" /></button>
            </div>
            <hr />
            <div className="openHouseCards__footer">
                    <img src={calendarIcon} alt="" />
                    <p>{PostedDate}</p>
               
            </div>
        </div>
    </div>
  )
}
OpenHouseCards.prototype ={
    saleImage: PropTypes.string,
    Sell: PropTypes.string,
    Category: PropTypes.string,
    Price: PropTypes.string,
    Bedroom: PropTypes.number,
    Bathroom: PropTypes.number,
    Feet: PropTypes.string,
    PlaceLocation: PropTypes.string,
    PostedDate: PropTypes.string,
}
export default OpenHouseCards;