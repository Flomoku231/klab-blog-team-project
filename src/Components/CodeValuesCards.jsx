import React from 'react'
import '../Styles/Component-styles/CodeValuesCards.css'
import PropTypes from 'prop-types'

const CodeValuesCards = ({Icon, Title, Description}) => {
  return (
    <div className='values__cards--containter'>
        <img src={Icon} alt="" />
        <h1>{Title}</h1>
        <p>{Description}</p>
    </div>
  )
}
CodeValuesCards.prototype={
    Icon: PropTypes.string,
    Title: PropTypes.string.isRequired,
    Description: PropTypes.string.isRequired,
}

export default CodeValuesCards;

