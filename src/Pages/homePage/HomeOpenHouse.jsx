import React from 'react'
import OpenHouseCards from '../../Components/OpenHouseCards'
import '../../Styles/Pages-styles/homePage/HomeOpenHouse.css'
import Hotel1 from '../../Assets/Images/hotel1.jpg'
import Fade from 'react-awesome-reveal';

const HomeOpenHouse = () => {
  return (
    <div className='homeOpenHouse__container'>
        <div className="homeOpenHouse__left">
            <Fade left>
            <h1>Upcoming</h1>
            <h2>Open House</h2>
            <p>Proin gravida tortor semper nibh vehicula, in tempor urna dignissim. </p>
            <a href="#">View More</a>
            </Fade>
        </div>
        <div className="homeOpenHouse__right">
        <Fade right>
            <OpenHouseCards
                saleImage ={Hotel1}
                Sell = 'For Sale'
                Category = 'Feature'
                Price = '2,000'
                Bedroom = {2}
                Bathroom = {1}
                Feet= {1000}
                PlaceLocation = 'Gikondo, Remera, Kigali - Rwanda'
                PostedDate = {'3 years ago'}
            />
            </Fade>
            <Fade right>
             <OpenHouseCards
                saleImage ={Hotel1}
                Sell = 'For Sale'
                Category = 'Feature'
                Price = '2,000'
                Bedroom = {2}
                Bathroom = {1}
                Feet= {1000}
                PlaceLocation = 'Gikondo, Remera, Kigali - Rwanda'
                PostedDate = {'3 years ago'}
            />
            </Fade>
            <Fade left>
             <OpenHouseCards
                saleImage ={Hotel1}
                Sell = 'For Sale'
                Category = 'Feature'
                Price = '2,000'
                Bedroom = {2}
                Bathroom = {1}
                Feet= {1000}
                PlaceLocation = 'Gikondo, Remera, Kigali - Rwanda'
                PostedDate = {'3 years ago'}
            />
            </Fade>
        </div>
    </div>
  )
}

export default HomeOpenHouse