import React from 'react'
import '../../css/nav/nav.css';
import { CiMenuFries } from "react-icons/ci";
import { FaRegSnowflake } from "react-icons/fa";
import { NavLink } from 'react-router-dom';

interface NavProps {

}

export const Nav: React.FC<NavProps> = () => {
        return (
            <>
            <div className="nav-ctn flex items-center gap-[27px] h-fit w-full px-[33px] py-[20px]">
            <NavLink to='/' className="flex gap-[6px] items-center">
            <FaRegSnowflake className='text-[23px]'/>
            <div className="nav-title sec-f text-[27px]">  Winter Gaming Store</div>
            </NavLink>
            </div>        
            </>
        )
}