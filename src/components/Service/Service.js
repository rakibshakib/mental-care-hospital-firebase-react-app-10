import React from 'react'
import useHospitalData from '../../hooks/useHospitalData'
import ServiceCart from '../ServiceCart/ServiceCart';

const Service = () => {
    const data = useHospitalData();
// this is home services components
    return (
        <div className='container mx-auto my-5'>
            <h2 className='text-center text-3xl font-medium my-2'>Our Services</h2>
            <hr />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-5">

                {
                    data.map(service => <ServiceCart service={service} key={service.id}></ServiceCart>)
                }
                
            </div>
        </div>
    )
}

export default Service
