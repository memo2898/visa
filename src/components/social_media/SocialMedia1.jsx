/* eslint-disable no-unused-vars */
import React from 'react'
import './SocialMedia1.css';

import ico_facebook from '../../assets/Iconos/SVG/btn-ico-facebook.svg'
import ico_instagram from '../../assets/Iconos/SVG/btn-ico-instagram.svg'
import ico_twitter from '../../assets/Iconos/SVG/btn-ico-twitter.svg'

function SocialMedia1() {
  return (
    <div className='cont-socialmedia1'>
        <div className="cont-item-socialmedia1 ">
            <img src={ico_facebook} className="item-socialmedia1 growth" />
        </div>
        
        <div className="cont-item-socialmedia1">
            <img src={ico_instagram} className="item-socialmedia1 growth" />
        </div>
        
        <div className="cont-item-socialmedia1">
            <img src={ico_twitter} className="item-socialmedia1 growth" />
        </div>
        
    </div>
  )
}

export default SocialMedia1