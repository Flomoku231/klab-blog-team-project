import React from 'react'
import '../../Styles/Pages-styles/ExecutiveHouse/ExecutiveHouse.css'

const ExecutiveHouseSearch = () => {
  return (
    <>
        <div className="executive__header">
        <input type="text" />
        <input type="text" />
        <input type="text" />
        <input type="text" />
        <button className="search__button">Search</button>
        <button className="more__button">More</button>
        </div>
        <hr id='line' />
    </>
  )
}

export default ExecutiveHouseSearch