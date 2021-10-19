import React from 'react';
import banner from '../../image/banner.jpg';
import './Banner.css'

const Banner = () => {
    // this is the home page banner 
    return (
        <div className='banner' style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6),
            rgba(0, 0, 0, 0.6)), url(${banner})`
            }}>

            <div className='text-alignment'>
                <h2 className='text-center font-bold text-xs md:text-xl lg:text-3xl text-white'>Happiness can be found even in the darkest of times, if one only remembers to turn on the light.</h2>
                <p className='text-white py-2'>— Albus Dumbledore</p>
            </div>
        </div>
    )
}

export default Banner
