import React from 'react'
import Specialist from '../Specialist/Specialist';
import { AiOutlineMail, AiOutlinePhone, GoLocation } from "react-icons/all";

const Contact = () => {
    // it a contact component for a route section 
    return (
        <div className='container mx-auto py-5'>

            <div className='px-5'>
                <h2 className='text-xl md:text-4xl text-blue-700 font-semibold py-5'>Mental Helth Care</h2>
                <p className='my-2 text-base'>Mental Care Hospital is one of the oldest and best mental health treatment and rehab centers in Dhaka, Bangladesh. Mental Care Hospital provided the very best accommodation, healthy food, 24 hours doctor facilities for patients.</p>

                <p className='my-2 text-base'>Mental Care Hospital is one of the oldest and best mental health treatment and rehab centers in Dhaka, Bangladesh. Mental Care Hospital provided the very best accommodation, healthy food, 24 hours doctor facilities for patients.</p>
            </div>
            <h2 className='text-xl md:text-2xl text-blue-700 font-semibold py-5 px-5'>Contact Information</h2>
            <div className='text-x px-5'>
                <h2><AiOutlineMail className='inline-block' /> Emai: mentalcarehospital@gmail.com</h2>
                <p><AiOutlinePhone className='inline-block' /> Phone: +880 125634789</p>
                <h2><GoLocation className='inline-block' /> Address: Dhanmondi Dhaka, Bangladesh</h2>
            </div>

            <Specialist />
        </div>
    )
}

export default Contact
