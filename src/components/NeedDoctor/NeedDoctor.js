import React from 'react';
import { Link } from 'react-router-dom';

const NeedDoctor = () => {
//   its a simple need doctor components
    return (
        <div className='bg-blue-700 my-8'>
            <div className='container mx-auto px-5 py-2 flex flex-col md:flex-row justify-center md:justify-between items-center'>
                <h2 className='text-xl md:text-2xl font-semibold py-5 text-white'>Need a Doctor? Make a Appointment now..</h2>
                <Link to='/booking'><button className="bg-white border border-blue-700 text-black my-5 px-8 py-2 focus:outline-none  rounded-full transform transition duration-300 hover:scale-105">Appoinment</button></Link>
            </div>
        </div>
    )
}

export default NeedDoctor
