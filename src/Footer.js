import React from 'react'
import avatar from './img/image-avatar.png'

export default function Footer() {
    return (
        <div className='footer'>
            <img src={avatar} alt="" className='avatar' />
            <span>Creation of</span>
            <span className='footerspan'>Jules Wyvern</span>
        </div>
    )
}
