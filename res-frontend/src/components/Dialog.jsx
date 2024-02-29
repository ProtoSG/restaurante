import { useState } from "react";
import { IoClose } from "react-icons/io5";
import lastVenta from "../hooks/lastVenta";
import { postVenta } from "../services/venta";
import Button from "./Button";
import RealizarPago from "./RealizarPago";
import RegistrarPlato from './RegistrarPlato';
import Table from './Table';

export default function Dialog({mesa}){
    
    const [active, setActive] = useState(false);
    const [activeVenta, setActiveVenta] = useState(false)
    const { data: venta, loading: loadingVenta, error: errorVenta} = lastVenta({mesa})
    
    const handleOpen = async () => {
        const dialog = document.getElementById(`${mesa.id}`);
        if (dialog) {
            dialog.showModal();
            setActive(true);
            if(!activeVenta){
                if(!venta?.estado) postVenta({mesa})
                setActiveVenta(true)
            }
        }
    }

    const handleClose = () => {
        const dialog = document.getElementById(`${mesa.id}`);
        if (dialog) {
            dialog.close();
            setActive(false)
        }
    }

    return(
        <>
        <span className="text-xl font-bold text-text-200">Total: {venta?.total}</span>
        <Button onClick={handleOpen} name = {"Abrir"}/>
        <dialog
            id={`${mesa?.id}`}
            className={`h-[70dvh] w-full bg-bg-300 rounded-2xl px-10 pt-3 pb-10
            transition-all duration-300 ${active ? "opacity-100" : "opacity-0 "}
            overflow-hidden
            `}>
            <span
                onClick={handleClose}
                className='absolute right-5 top-5 text-3xl hover:scale-150 text-text-200 hover:text-accent-200 hover:cursor-pointer transition-all'>
                    <IoClose/>
            </span>
            <Table venta={venta}/>
            <RegistrarPlato venta={venta}/> 
            <RealizarPago venta={venta}/>
        </dialog>
        </>
    )
}
