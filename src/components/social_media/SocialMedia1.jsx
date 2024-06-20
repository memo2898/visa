/* eslint-disable no-unused-vars */
import React from 'react'
import './SocialMedia1.css';

import ico_facebook from '../../assets/Iconos/SVG/btn-ico-facebook.svg'
import ico_instagram from '../../assets/Iconos/SVG/btn-ico-instagram.svg'
import ico_twitter from '../../assets/Iconos/SVG/btn-ico-twitter.svg'
import { Link } from 'react-router-dom';

function SocialMedia1() {
  return (
    <div className='cont-socialmedia1'>

    <Link to="https://www.facebook.com/">
        <div className="cont-item-socialmedia1 " >
            <img src={ico_facebook} className="item-socialmedia1 growth" />
        </div>
    </Link>
    <Link to="https://www.instagram.com/">
        <div className="cont-item-socialmedia1">
            <img src={ico_instagram} className="item-socialmedia1 growth" />
        </div>
    </Link>
        
    <Link to="https://www.x.com/">
        <div className="cont-item-socialmedia1">
            <img src={ico_twitter} className="item-socialmedia1 growth" />
        </div>
    </Link>
        
    </div>
  )
}

export default SocialMedia1