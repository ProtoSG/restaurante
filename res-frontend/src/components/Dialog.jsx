import { useState } from "react";
import { IoClose } from "react-icons/io5";
import Button from "./Button";
import RealizarPago from "./RealizarPago";
import RegistrarPlato from './RegistrarPlato';
import Table from './Table';

export default function Dialog({mesa}){
    
    const [active, setActive] = useState(false);
    const [ventaExist, setVentaExist] = useState(false);
    const [pedidos, setPedidos] = useState([]);

    const handleOpen = async () => {
        const dialog = document.getElementById(`${mesa.id}`);
        if (dialog) {
            dialog.showModal();
            setActive(true);

            if(!ventaExist){
                try{
                    const data = {
                        date: new Date().toISOString().slice(0, 10),
                        hour: new Date().toISOString().slice(11, 19),
                        mesa_id: mesa.id
                    }

                    console.log(data)

                    const response = await fetch('http://localhost:3000/venta', {
                        method: 'POST',
                        headers:{
                            'Content-Type' : 'application/json'
                        },
                        body: JSON.stringify(data)
                    })

                    if(!response.ok){
                        throw new Error("Hubo un problema al enviar la  solicitud " + response.status )
                    }

                    const responseData = await response.json();
                    console.log('Respuesta del servidor:', responseData);
                }catch(e){
                    console.error(e)
                    throw e
                }
                setVentaExist(true)
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
            <Table mesa = {mesa} pedidos = {pedidos} setPedidos={setPedidos}/>
            <RegistrarPlato pedidos = {pedidos} setPedidos={setPedidos}/> 
            <RealizarPago/>
        </dialog>
        </>
    )
}
