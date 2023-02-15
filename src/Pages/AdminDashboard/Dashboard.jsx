
import React from 'react'
import '../../Styles/Pages-styles/AdminDashboard/Dashboard.css'
import {RxDashboard} from "react-icons/rx";
import {AiFillEdit, AiOutlineFileAdd} from 'react-icons/ai'
import {FaBloggerB, FaList} from 'react-icons/fa'
import {BsFillHouseFill} from 'react-icons/bs'
import {MdApartment, MdReviews} from 'react-icons/md'
import {TbBrandBooking} from 'react-icons/tb'
import DashboardComponent from './DashboardComponent';


export const Dashboard = () => {

  return (
    
    <div className='dashboard__container'>
            
        <div className="dashboard__left">
          <div className="dashboard__left--header">
            <h1>MAIN</h1>
          </div>
          <ul className='MainList'>
            <li> <RxDashboard id='dashboard__icon' /> <h2>Dashboard</h2></li>
            <li><AiFillEdit id='dashboard__icon'/> <h2>Edit Profile</h2></li>
            <li><FaBloggerB id='dashboard__icon'/> <h2>Blogs</h2><span className='Quantity' >3</span></li>
            <li><BsFillHouseFill id='dashboard__icon'/> <h2>Houses</h2><span className='Quantity'>3</span></li>
            <li><MdApartment id='dashboard__icon'/> <h2>Appartments</h2><span className='Quantity'>3</span></li>
          </ul>
          <div className="dashboard__left--subheader">
            <h1>LISTINGS</h1>
          </div>
          <ul className='Listings'>
            <li><FaList id='dashboard__icon'/> <h2>My List</h2></li>
            <li><TbBrandBooking id='dashboard__icon'/> <h2>Booking</h2><span className='Quantity'>3</span></li>
            <li><MdReviews id='dashboard__icon'/> <h2>Review</h2><span className='Quantity'>3</span></li>
            <li><AiOutlineFileAdd id='dashboard__icon' /> <h2>Add New</h2></li>
          </ul>
          <div className="dashboard__left--footer">
            <p id='footer--paragraph'>© HOMERADAR 2022 . ALL RIGHTS RESERVED.</p>
          </div>
        </div>
        <div className="dashboard__right">
          <DashboardComponent/>
        </div>
    </div>
  )
}
