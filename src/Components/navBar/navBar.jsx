import React from 'react'
import '../../Styles/Component-styles/navBar.css'
import { Link } from 'react-router-dom'
import userIcon from '../../Assets/Icon/userIcon.svg'
import { useState } from 'react'
import { PropertyDropDown } from '../PropertyDropDown'
import { ServicesMenuDropDown } from '../ServicesMenuDropDown'
import { CommunityDropDown } from '../CommunityMenuDropDown'
import { AccountLogin } from '../AccountLogin'


export const NavBar = () => {
// Menu DropDown Logic
  const [propertyMenuBar, setPropertyMenuBar] = useState(false)
  const [communityMenuBar, setCommunityMenuBar] = useState(false)
  const[serviceMenuBar, setServiceMenuBar] = useState(false)
  const [loginPopup, setLoginPopup] = useState(false)

  const DisplayLoginPopup = ()=>{
    setLoginPopup(!loginPopup)
  }

//  Property Menu dropDown
  const ShowPropertyMenu = ()=>{
    setPropertyMenuBar(!propertyMenuBar)
  }
  const HidePropertyMenu = () =>{
    setPropertyMenuBar(!propertyMenuBar)
  }
//CommunityMenu DropDown 
  const ShowCommunityMenuBar =()=>{
    setCommunityMenuBar(!communityMenuBar)
  }
  const HideCommunityMenuBar =()=>{
    setCommunityMenuBar(!communityMenuBar)
  }
  // ServicesMenu DropDown 
  const ShowServicesMenuBar =()=>{
    setServiceMenuBar(!serviceMenuBar)
  }
  const HideServicesMenuBar =()=>{
    setServiceMenuBar(!serviceMenuBar)
  }
  return (
    <>
      <div className="container">
        <div className="menu__left">
           <Link className='NavLink' to='/'> <h1 className='logo'>Blair Owens</h1></Link>
        
        <ul className='menu-list'>
          <li onMouseEnter={ShowPropertyMenu} onMouseLeave={HidePropertyMenu} >Our Properties
            {
              propertyMenuBar ? (
                  <PropertyDropDown onMouseEnter={ShowPropertyMenu} />
              ): null
            }
            </li>
          <Link className='NavLink' to='/search' > <li>MLS Search</li></Link>
          <li onMouseEnter={ShowCommunityMenuBar} onMouseLeave={HideCommunityMenuBar}>Communities
            {
              communityMenuBar ? (
                <CommunityDropDown
                  onMouseEnter = {ShowCommunityMenuBar}
                /> 
              ): null
            }
          </li>
           <Link className='NavLink' to='/news' > <li>News</li></Link>
          <li onMouseEnter={ShowServicesMenuBar} onMouseLeave={HideServicesMenuBar} >Services
              {
                serviceMenuBar ? (
                  <ServicesMenuDropDown
                    onMouseEnter ={ShowServicesMenuBar}
                  />
                ): null
              }
          </li>
          <Link className='NavLink' to='/aboutUs' >  <li>About Blair</li></Link>
          <Link className='NavLink' to='/contactUs' > <li>Contact</li></Link>
        </ul>
        </div>
        <div  className="nav__bar-icon">
          <img onClick={DisplayLoginPopup}   src={userIcon} alt="" />
        </div>
     </div>
       {
        loginPopup ? (
          <AccountLogin/>
        ): null
      }
      </>
  )
}
