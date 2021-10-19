import React from 'react';
import { useForm } from "react-hook-form";
import useAuth from '../../hooks/useAuth';
import booking from '../../image/booking.png';
import BackToHome from '../BackBtn/BackToHome'


const Booking = () => {
    // its a simple booking form 
    // getting auth data form hooks
    const { user } = useAuth();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <>
            <div className='my-8 border-2 rounded flex flex-col lg:flex-row items-center justify-around p-5 container mx-auto shadow-xl'>
                <div>
                    <img className='rounded-md' src={booking} alt="" />
                </div>
                <div className='bg-blue-600 px-2 py-5 rounded-md'>
                    <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col items-center justify-between'>
                        {/* register your input into the hook by invoking the "register" function */}
                        <input className='border-2 rounded px-8 py-2 my-2' placeholder='patient name' {...register("name")} />
                        <input className='border-2 rounded px-8 py-2 my-2' placeholder='email' defaultValue={user?.email} {...register("email")} />
                        {/* include validation with required or other standard HTML validation rules */}
                        <input className='border-2 rounded px-8 py-2 my-2' placeholder='phone number' {...register("phone", { required: true })} />
                        {/* errors will return when field validation fails  */}
                        {errors.phone && <span>This field is required</span>}

                        <label htmlFor="appointment" className='text-white'>Gender</label>
                        <select className='border-2 rounded px-8 py-2 my-2 ml-2 ' {...register("gender")}>
                            <option value="female">female</option>
                            <option value="male">male</option>
                            <option value="other">other</option>
                        </select>
                        <label htmlFor="appointment" className='text-white'>Which Appointment You want ?</label>
                        <select className='border-2 rounded px-8 py-2 my-2 ml-2' {...register("appoinment")}>
                            <option value="Recovery from Addiction">Recovery from Addiction</option>
                            <option value="Counseling">Counseling</option>
                            <option value="Detoxification">Detoxification</option>
                            <option value="Psychiatric or Mental Disorder">Psychiatric or Mental Disorder</option>
                            <option value="Psychotherapy">Psychotherapy</option>
                            <option value="Social Skill Training">Social Skill Training</option>
                        </select>
                        {errors.appoinment && <span>This field is required</span>}

                        <input className='border-2 rounded px-8 py-2 my-2 cursor-pointer transform transition duration-300 hover:scale-105' type="submit" value='Get Appoinment' />
                    </form>
                </div>

            </div>
            <BackToHome />
        </>
    );
}

export default Booking
