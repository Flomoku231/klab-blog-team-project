import React from 'react'
import { NavBar } from '../../Components/navBar/navBar'
import { Footer } from './Footer'
import { HomeAboutUs } from './HomeAboutUs'
import HomeContact from './HomeContact'
import { HomeCoreValues } from './HomeCoreValues'
import { HomeExperience } from './HomeExperience'
import { HomeIntro } from './HomeIntro'
import HomeOpenHouse from './HomeOpenHouse'
import { HomePageFeatures } from './HomePageFeatures'
import HomeTestimonial from './HomeTestimonial'


const Home = () => {
  return (
    <div>
        <NavBar/>
        <HomeIntro/>
        <HomePageFeatures/>
        <HomeAboutUs/>
        <HomeExperience/>
        <HomeCoreValues/>
        <HomeContact/>
        <HomeTestimonial/>
        <HomeOpenHouse/>
        <Footer/>
    </div>
  )
}

export default Home