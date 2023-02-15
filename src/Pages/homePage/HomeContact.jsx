import React from "react"
import '../../Styles/Pages-styles/homePage/HomeContact.css'

const HomeContact = () => {
  return (
    <div className="homeContact__container">
      <div className="homeContact__content">
          <div className="homeContact--header">
            <h1>You're In Good Hands</h1>
            <p>SELL YOUR PROPERTY THROUGH BLAIR OWENS</p>
          </div>
          <button type="click" className="contact__button">Contact Us</button>
          <div className="homeContact--bottom">
            <h1>Looking To Buy A New Property?</h1>
            <a href="#">Explore The MLS</a>
          </div>
      </div>
    </div>
  )
}

export default HomeContact