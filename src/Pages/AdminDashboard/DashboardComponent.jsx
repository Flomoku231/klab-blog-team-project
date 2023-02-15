import React from 'react'
import { DashboardComponentCards } from '../../Components/DashboardComponentCards'
import '../../Styles/Pages-styles/AdminDashboard/DashboardComponent.css'
import {BiListCheck} from 'react-icons/bi'
import StatisticChart from '../../Assets/Images/Chart.JPG'
import {AiOutlineCheck} from 'react-icons/ai'
import {MdOutlineNavigateBefore} from 'react-icons/md'
import DashboardActivitiesCards from '../../Components/DashboardActivitiesCards'

const DashboardComponent = () => {
  return (
    <div className='dashboardComponent__container'>
      <div className="dasboardComponent__content">
        <div className="dashboardComponent__header">
          <h1>Dashboard</h1>
        </div>
        <div className="dasboardComponent__cards">
          <DashboardComponentCards
            Title={'Active Listings'}
            Quantity={124}
            Icons={<BiListCheck id='active--icon'/>}
          />
           <DashboardComponentCards
            Title={'Active Listings'}
            Quantity={124}
            Rating ={'+356'}
            Duration = {'this week'}
            Icons={<BiListCheck  id='active--icon' />}
          />
           <DashboardComponentCards
            Title={'Active Listings'}
            Quantity={124}
            Rating ={'+356'}
            Duration = {'this week'}
            Icons={<BiListCheck  id='active--icon'/>}
          />
        </div>
        <div className="dashboardComponent__popup">
          <h1>Your listing Family house in Brooklyn has been approved!</h1>
          <span className='cancelMe'>x</span>
        </div>
        <div className="dashboardComponent__statistic">
            <h1>Your Statistics</h1>
            <img src={StatisticChart} alt="chart" />
        </div>
        <div className="dashboardComponent__activities">
          <h1>Last Activities</h1>
          <div className="activities__cards">
            <DashboardActivitiesCards
              Icon={<AiOutlineCheck/>}
              Description={'Your listing Urban Appartmes has been approved!'}
              PostDate ={'28 may 2020'}
            />
             <DashboardActivitiesCards
              Icon={<AiOutlineCheck/>}
              Description={'Your listing Urban Appartmes has been approved!'}
              PostDate ={'28 may 2020'}
            />
             <DashboardActivitiesCards
              Icon={<AiOutlineCheck/>}
              Description={'Your listing Urban Appartmes has been approved!'}
              PostDate ={'28 may 2020'}
            />
          </div>
        </div>
        <div className="dashboardComponent__footer">
          <ul className="footer__content">
            <h2>Helpful Links:</h2>
            <li>ABOUT</li>
            <li>BLOG</li>
            <li>PRICING PLAN</li>
            <li>CONTACTS</li>
            <li>HELP CENTER</li>
          </ul>
          <div className="navigateUp">
            <button className="moveUp"><MdOutlineNavigateBefore/></button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DashboardComponent