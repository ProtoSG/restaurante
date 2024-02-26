import { IoClose } from "react-icons/io5";
import Table from "./Table";
import RegistrarPlato from "./RegistrarPlato";


export default function Dialog({mesa, active, setActive}){

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
            className={`relative h-[60dvh] w-full bg-bg-300 rounded-2xl px-10 pt-3 pb-10
            transition-all duration-300 ${active ? "opacity-100" : "opacity-0 "}`}>
            <span
                onClick={handleClose}
                className='absolute right-5 top-5 text-3xl hover:scale-150 text-text-200 hover:text-accent-200 hover:cursor-pointer transition-all'>
                    <IoClose/>
            </span>
            <Table mesa = {mesa}/>
            <RegistrarPlato/> 
        </dialog>
    )
}
