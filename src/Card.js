import React from 'react';
import './Card.css';

function Card({img,title}) {
    return (
        <div className='galleryCard'>
              <img src={img} alt="" className="hero"/>
              <h4>{title}</h4>
        </div>
    )
}

export default Card
