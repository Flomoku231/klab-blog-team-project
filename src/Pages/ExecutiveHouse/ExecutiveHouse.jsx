import React from 'react'
import { NavBar } from '../../Components/navBar/navBar'
import '../../Styles/Pages-styles/ExecutiveHouse/ExecutiveHouse.css'
import { Footer } from '../homePage/Footer'
import ExecutiveHouseBody from './ExecutiveHouseBody'
import ExecutiveHouseCards from './ExecutiveHouseCards'
import ExecutiveHouseSearch from './ExecutiveHouseSearch'


const ExecutiveHouse = () => {
  return (
    <div className='executive__container'>
        <NavBar/>
        <ExecutiveHouseSearch/>
       <ExecutiveHouseBody/>
       <ExecutiveHouseCards/>
       <Footer/>
    </div>
  )
}

export default ExecutiveHouse