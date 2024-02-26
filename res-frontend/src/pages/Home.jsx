import { useState } from 'react';
import { IoClose } from "react-icons/io5";
import ListMesas from '../components/ListMesas'

function Dialog({mesa, active, setActive}){

    const handleClose = () => {
        const dialog = document.getElementById(`${mesa.id}`);
        if (dialog) {
            dialog.close();
            setActive(false)
        }
    }

    return(
        <dialog 
            id={`${mesa.id}`} 
            className={`relative h-[60dvh] w-full bg-bg-300 rounded-2xl px-10 py-10
            transition-all duration-300 ${active ? "opacity-100" : "opacity-0 "}`}>
        
            {
                mesa.ordenes.map((orden, index) => (
                    <p key={index}>{orden.nombre}</p>
                ))
            }
            <span
                onClick={handleClose}
                className='absolute right-5 top-5 text-3xl hover:scale-150 text-text-200 hover:text-accent-200 hover:cursor-pointer transition-all'>
                    <IoClose />
            </span>
        </dialog>
    )
}

function Buttom({ name, mesa }) {
    const [active, setActive] = useState(false)

    const handleActive = () => {
        const dialog = document.getElementById(`${mesa.id}`);
        if (dialog) {
            dialog.showModal();
            setActive(true)
        }
    }

    return (
        <>
            <button
                onClick={handleActive}
                className='bg-primary-200 w-full py-4 text-accent-200 rounded-3xl hover:bg-accent-100 hover:scale-110 transition-all hover:font-bold text-xl'>
                {name}
            </button>
            <Dialog mesa = {mesa} active = {active} setActive = {setActive}/>
        </>
    )
}

export default function Home() {
  return (
      <section className='w-full'>
        <ListMesas/>
    </section>
  )
}
