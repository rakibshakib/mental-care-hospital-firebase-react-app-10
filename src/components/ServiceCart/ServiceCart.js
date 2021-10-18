import React from 'react'
import { useHistory } from 'react-router';

const ServiceCart = ({ service }) => {
    const { image, name, description, id } = service;
    const history = useHistory()
    const handleRoute = () => {
        history.push(`/service/${id}`);
    }

    

    return (
        <div className="bg-green-700 transition lg:transform duration-700 hover:shadow-xl hover:scale-105 rounded-lg relative card-width">
            <div className='flex flex-col items-center text-center text-white'>
                <div className='cart-img'>
                    <img src={image} alt="" />
                </div>
                <h2 className='text-2xl font-semibold my-3 pb-2 border-b-2'>{name}</h2>
                <p className='text-sm my-2'>{description.slice(0, 100)}...</p>
                <button onClick={handleRoute} className="bg-white text-black my-5 px-8 py-2 focus:outline-none  rounded-full transform transition duration-300 hover:scale-105">See Details</button>
            </div>
        </div>
    )
}

export default ServiceCart
