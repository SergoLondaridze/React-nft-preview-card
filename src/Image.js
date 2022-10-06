import React from 'react'
import img1 from './img/image-equilibrium.jpg'
import view from './img/icon-view.svg'
import './sergolondaridze.css';
export default function Image() {
    return (
        <div className='box'>
            <img src={img1} alt="" className='img1' />
            <div className='boxhow'>
                <img src={view} alt="" className='imgview' />
            </div>
        </div>
    )
}
