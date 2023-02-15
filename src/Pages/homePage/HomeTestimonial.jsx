import React from 'react'
import '../../Styles/Pages-styles/homePage/HomeTestimonial.css'
import Hotel1 from '../../Assets/Images/hotel1.jpg'
import { TestimonialCards } from '../../Components/TestimoniaCards'
import Fade from 'react-awesome-reveal';
import Person from '../../Assets/Images/hotel1.jpg'

const HomeTestimonial = () => {
  return (
    <div className='home__testimonia--contianer'>
        <div className="home__testimonia--header">
            <h1>Testimonials</h1>
            <p>What Our Clients Say</p>
        </div>
        <div className="home__testimonia--body">
            <div className="testimonia__body--left">
                <Fade left>
                <img src={Hotel1} alt="" />
                </Fade>
            </div>
            <div className="testimonia__body--right">
                <Fade right>
                <TestimonialCards
                    Quote={'I couldn’t be more impressed with the team at Blair Owens, they found my family our perfect dream home. True professionals from knowledge of the area, to the closing process and everything else in between — thank you!'}
                    Name={'The Cross Family'}
                    Image={Person}
                />
                </Fade>
            </div>
        </div>
    </div>
  )
}

export default HomeTestimonial