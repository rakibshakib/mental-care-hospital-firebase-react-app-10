import React from 'react';
import doctor from '../../image/doctor.svg';
import care from '../../image/care.svg';
import love from '../../image/love.svg';
import './Banner.css'

const BannerCard = () => {
    // this a small banner card for home page
    return (
        <div className='my-5  container mx-auto'>
            <h2 className="text-center text-xl md:text-3xl font-semibold py-5">Why Choose Us?</h2>
            <hr />
            <div className='my-5 px-2 flex flex-col md:flex-row justify-center items-center gap-4 '>
                <div className='banner-card flex flex-col justify-center items-center shadow-lg p-5 rounded-lg'>
                    <img src={doctor} alt="" />
                    <h2 className='text-lg md:text-2xl font-semibold py-5'>Counselling</h2>
                    <p className='text-center'>We believe that proper counselling is more effective than medicine.</p>

                </div>
                <div className='banner-card flex flex-col justify-center items-center shadow-lg p-5 rounded-lg'>
                    <img src={care} alt="" />
                    <h2 className='text-lg md:text-2xl font-semibold py-5'>Treatments</h2>
                    <p className='text-center'>We are determined to cure our patient fully by our very experienced specialist. </p>
                </div>
                <div className='banner-card flex flex-col justify-center items-center shadow-lg p-5 rounded-lg'>
                    <img src={love} alt="" />
                    <h2 className='text-lg md:text-2xl font-semibold py-5'>Rehabilitation</h2>
                    <p className='text-center'>We are here to help our patient for a healthy life with proper rehabilitation.</p>
                </div>
            </div>
        </div>
    )
}

export default BannerCard
