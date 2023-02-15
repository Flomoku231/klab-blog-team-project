import React from 'react'
import {BsCalendarDate} from 'react-icons/bs'
import '../Styles/Component-styles/DashboardActivitiesCards.css'

const DashboardActivitiesCards = ({Icon, Description, PostDate}) => {
  return (
    <div className='dashboardActiviteisCards__container'>
        <div className="icons__container">
            {Icon}
        </div>
        <div className="body--container">
            <p>{Description}</p>
            <div className="date--container">
                <BsCalendarDate id='DateIcon'/>
                <p>{PostDate}</p>
            </div>
        </div>
        <button className="cancelActivitu--btn">
            <h3>x</h3>
        </button>
    </div>
  )
}

export default DashboardActivitiesCards