import React from 'react';
import { GoHome } from "react-icons/go";
import { IoStatsChart } from "react-icons/io5";
import { RiLogoutBoxLine } from "react-icons/ri";
import { Link, useLocation } from 'react-router-dom';

function SpanItem({icon, isSelected}) {
    return (
        <span className={`mr-2 w-12 h-12 rounded-xl bg-bg-200 flex justify-center items-center text-2xl
        ${isSelected ? 'bg-primary-100' : 'text-text-200'}
        `}>{icon}</span>
    )

}

function ItemHeader({name, link, icon}) {

    const location = useLocation();
    const isSelected = location.pathname === `/${link}`;
    return (
        <li className='text-xl pb-6  '>
            <Link to={`/${link}`} className='flex  items-center hover:bg-primary-100 rounded-xl'>
                <SpanItem isSelected={isSelected} icon={icon}/>
                {name}
            </Link>
        </li>
    )
}

export default function Header() {
 
return (
    <header className='h-[90dvh] min-w-56 text-text-100 flex flex-col justify-between items-center  '>
        <div>
            <div className='w-20 h-20 bg-bg-200 rounded-full'></div>
        </div>
        <nav className='w-full'>
            <ul>
                <ItemHeader  name='Home' link='' icon={<GoHome/>} />
                <ItemHeader  name='Dashboard' link='dashboard' icon={<IoStatsChart/>}/>
            </ul>
        </nav>
        <button className='flex items-center text-xl w-full '>
            <SpanItem icon={<RiLogoutBoxLine/>}/>
            Logout
        </button>
    </header>
    )
}
