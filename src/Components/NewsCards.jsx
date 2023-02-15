import React from 'react'
import PropTypes from 'prop-types'
import '../Styles/Component-styles/NewsCards.css'
import { Link } from 'react-router-dom'

const NewsCards = ({NewsImage, PublisherImage, NewsTitle, PublisherName, Description}) => {
  return (
    <div className='news__cards--container'>
        <div className="news__cards--img">
            <img src={NewsImage} alt="" />
        </div>
        <div className="news__cards--header">
            <img src={PublisherImage} alt="" />
            <div className="header__left">
                <h1>{NewsTitle}</h1>
                <h2>{PublisherName}</h2>
            </div>
        </div>
        <div className="news__cards--contents">
                <p>{Description}</p>
                <a href={'/newsDetails/:id'} className='news__cards--btn'> <button>Read Mode</button></a>
               
            </div>
    </div>
  )
}

NewsCards.prototype = {
    NewsImage: PropTypes.string.isRequired,
    PublisherImage: PropTypes.string,
    NewsTitle: PropTypes.string,
    PublisherName: PropTypes.string.isRequired,
    Description: PropTypes.string.isRequired
}

export default NewsCards