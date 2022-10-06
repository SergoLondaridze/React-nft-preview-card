import React from 'react';
import Image from './Image';
import Text from './Text'
import PreFooter from './PreFooter';
import Footer from './Footer';
import './sergolondaridze.css';
export default function Card() {
    return (
        <div className='card'>
            <Image />
            <Text />
            <PreFooter />
            <Footer />
        </div>
    )
}
