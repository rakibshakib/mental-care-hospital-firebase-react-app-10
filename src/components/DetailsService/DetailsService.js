import React from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import ServiceData from '../../Data/serviceData.json';
import BackToHome from '../BackBtn/BackToHome'

const DetailsService = () => {
    const hospitalData = ServiceData
    const { id } = useParams();
    // find the data form dynamik url route
    const dataDetails = hospitalData.find(item => item.id === parseInt(id));
    const { name, image, description, effectiveness, available_day } = dataDetails;

    return (
        <div className='container mx-auto my-5'>

            <div className='flex flex-col items-center justify-between'>
                <div>
                    <img className='mx-auto rounded-md shadow-md' src={image} alt="" />
                </div>
                <div className='py-5'>
                    <h2 className='text-3xl font-bold my-2 py-2 px-2 bg-blue-200'>{name}</h2>
                    <p className='text-md my-2 px-2'>Details: {description}</p>
                    <p className='text-md font-semibold my-2 px-2'>Apointment Day: <span className='text-blue-700 font-bold'>{available_day}</span></p>
                    <p className='text-md my-2 px-2'>Effectiveness: {effectiveness}</p>
                </div>
                <Link to='/booking'><button className="bg-blue-600 text-white my-5 px-8 py-2 focus:outline-none  rounded-full transform transition duration-300 hover:scale-105">Get Appointment</button></Link>
            </div>
            <BackToHome />
        </div>
    )
}

export default DetailsService
