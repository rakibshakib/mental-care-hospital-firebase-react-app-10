import React from 'react'
import BannerCard from '../BannerCard/BannerCard'
import NeedDoctor from '../NeedDoctor/NeedDoctor';
import aboutus from '../../image/aboutus.jpg'
// this is about us section 
const AboutUS = () => {
    return (
        <><div className='container mx-auto py-5'>
            <div className='flex flex-col md:flex-row md:justify-between justify-center items-center'>
                <img className='rounded-xl p-2' src={aboutus} alt="" />
                <div className='p-5'>
                    <h2 className='text-xl md:text-4xl text-blue-700 font-semibold py-5'>Mental Helth Care</h2>
                    <p className='my-2 text-base'>Mental Care Hospital is one of the oldest and best mental health treatment and rehab centers in Dhaka, Bangladesh. Mental Care Hospital provided the very best accommodation, healthy food, 24 hours doctor facilities for patients.</p>

                    <p className='my-2 text-base'>Mental Care Hospital is one of the oldest and best mental health treatment and rehab centers in Dhaka, Bangladesh. Mental Care Hospital provided the very best accommodation, healthy food, 24 hours doctor facilities for patients.</p>
                </div>
            </div>
            <BannerCard />
        </div>
            <NeedDoctor />
        </>
    )
}

export default AboutUS
