import React from 'react'
import '../../Styles/Pages-styles/AdminDashboard/AdminNavBar.css'
import {MdNotificationsNone} from "react-icons/md";
import ProfileImage from '../../Assets/Images/hotel1.jpg'

const AdminNavBar = () => {
  return (
   <React.Fragment>
      <nav className="admin__nav--container">
          <div className="admin__nav--brand">
            <h2>Flomoku</h2>
          </div>
          <div className="admin__nav--right">
            <div className="admin__nav--profile">
              <img id='Profile' src={ ProfileImage } alt="Profile" />
            </div>
            <div className="admin__nav--notification">
               <MdNotificationsNone id='admin__notification'/>
               <span id='notification__number'>3</span>
            </div>
          </div>
      </nav>
   </React.Fragment>
  )
}

export default AdminNavBar