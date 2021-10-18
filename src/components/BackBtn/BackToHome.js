import React from 'react';
import { MdOutlineKeyboardBackspace } from 'react-icons/md';
import { Link } from 'react-router-dom';
const Back = () => {
    return (
        <div className="my-5 border-2 py-2 px-2 ">
            <Link to="/" className=" hover:underline text-gray-800 select-none flex items-center space-x-2"><MdOutlineKeyboardBackspace /> <span>Back</span></Link>
        </div>
    )
}

export default Back