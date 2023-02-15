import React from 'react'
import '../../Styles/Pages-styles/AdminDashboard/AddHouse.css'

const AddHouse = () => {
  return (
    <div className='addHouse__container'>
        <form action="" className="addHouse__form">
            <div className="HouseImage">
                <input type="file" id='houseImage' />
                <label htmlFor="houseImage">House Image</label>
            </div>
            <div className="HousePrice">
                <input type="text" id='housePrice' />
                <label htmlFor="housePrice">House Price</label>
            </div>

                <div className="bedRooms">
                    <input type="number" id='houseBedroom' />
                    <label htmlFor="houseBedroom">Number of Bedrooms</label>
                </div>
                <div className="bathRooms">
                    <input type="number" id='houseBathroom' />
                    <label htmlFor="houseBedroom">Number of Bathrooms</label>
                </div>
                <div className="squareFeet">
                    <input type="text" id='square' />
                    <label htmlFor="square">Number of Square Feet</label>
                </div>

            <div className="HouseLocation">
                <input type="text" id='location' />
                <label htmlFor="location">House Location</label>
            </div>
            <button className='AddHouse__button'>Add House</button>
        </form>
    </div>
  )
}

export default AddHouse