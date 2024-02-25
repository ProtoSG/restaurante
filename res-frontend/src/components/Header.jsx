import React from 'react'
import { Link } from 'react-router-dom'
import { GoHome } from "react-icons/go";
import { IoStatsChart } from "react-icons/io5";
import { RiLogoutBoxLine } from "react-icons/ri";
import { useState } from 'react';
function SpanItem({icon, isSelect}) {
    return (
        <span className={`mr-2 w-12 h-12 rounded-xl bg-bg-200 flex justify-center items-center text-2xl
        ${isSelect ? 'bg-primary-100' : 'text-text-200'}
        `}>{icon}</span>
    )

}

function ItemHeader({name, link, icon, isSelect}) {
    return (
        <li className='text-xl pb-6  '>
            <Link to={`/${link}`} className='flex  items-center'>
                <SpanItem isSelect={isSelect} icon={icon}/>
                {name}
            </Link>
        </li>
    )
}

export default function Header() {

    const [isSelect, setIsSelect] = useState(false)

   const handleCLick = () => {
         setIsSelect(!isSelect)
    }
 
return (
    <header className='h-[90dvh] w-44 text-text-100 flex flex-col justify-between items-center  '>
        <div>
            <div className='w-20 h-20 bg-bg-200 rounded-full'></div>
        </div>
        <nav className='w-full'>
            <ul>
                <ItemHeader isSelect={isSelect} handleCLick={handleCLick} name='Home' link='' icon={<GoHome/>} />
                <ItemHeader isSelect={isSelect} handleCLick={handleCLick} name='Dashboard' link='dashboard' icon={<IoStatsChart/>}/>
            </ul>
        </nav>
        <button className='flex items-center text-xl w-full '>
            <SpanItem icon={<RiLogoutBoxLine/>}/>
            Logout
        </button>
    </header>
    )
}
