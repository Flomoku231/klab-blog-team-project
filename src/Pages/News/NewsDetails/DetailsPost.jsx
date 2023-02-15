import React from 'react'
import '../../../Styles/Pages-styles/NewsPage/NewsDetails/DetailsPost.css'

function DetailsPost({PostImage, Description, PostTitle}) {
  return (
    <div className='detailsPost__container'>
        <img className='detailsPost__image' src={PostImage} alt="" />
        <h1>{PostTitle}</h1>
        <p>{Description.substring(0, 75)}<span>...</span></p>
    </div>
  )
}

export default DetailsPost