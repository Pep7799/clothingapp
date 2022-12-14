import React from 'react'
import './menuitem.scss'

const MenuItem = ({title, imageUrl, size}) => {
  return (
    <div 
      className={`${size} menu-item`}>
        <div className='background' style={{backgroundImage: `url(${imageUrl})`}}></div>
       <div className='content'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <span className='subtitle'> SHOP NOW</span>
       </div>
    </div>
  )
}

export default MenuItem