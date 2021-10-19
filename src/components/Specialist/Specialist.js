import React from 'react';
import dr from '../../image/dr.jpg';
import dr2 from '../../image/dr2.jpg';
import dr3 from '../../image/dr3.jpg';

const Specialist = () => {
    // this is our doctor details section for home page
    return (
        <div className='container mx-auto my-8'>
            <h2 className='text-center text-xl md:text-3xl font-semibold py-5'>Our Specialist</h2>
            <hr />
            <div className='my-5 px-5 flex flex-col md:flex-row justify-center items-center gap-4 w-75 mx-auto' >
                <div className='flex flex-col justify-center items-center dr-card'>
                    <div className='dr-img transition lg:transform duration-700 hover:shadow-xl hover:scale-105 '><img src={dr} alt="" /></div>
                    <div className=' border rounded-md text-center p-5'>
                        <h2 className='text-lg md:text-2xl font-semibold py-5'>Dr. Alex</h2>
                        <p>MBBS
                            (Rajshahi Medical College Hospital)
                            RMO (LSH)</p>
                    </div>
                </div>
                <div className='flex flex-col justify-center items-center dr-card'>
                    <div className='dr-img transition lg:transform duration-700 hover:shadow-xl hover:scale-105 '><img src={dr2} alt="" /></div>
                    <div className=' border rounded-md text-center p-5'>
                        <h2 className='text-lg md:text-2xl font-semibold py-5'>Dr. Kabir Rahman</h2>
                        <p>MBBS, M.Phill (Psychiatry)
                            Advanced Trend in Sexual Medicine (Bangalore)</p>
                    </div>
                </div>
                <div className='flex flex-col justify-center items-center dr-card'>
                    <div className='dr-img transition lg:transform duration-700 hover:shadow-xl hover:scale-105 '><img src={dr3} alt="" /></div>
                    <div className='border rounded-md text-center p-5'>
                        <h2 className='text-lg md:text-2xl font-semibold py-5'>Dr. Jenie Lofej</h2>
                        <p>Psychologist
                            M.Sc. in Psychology PGT</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Specialist
