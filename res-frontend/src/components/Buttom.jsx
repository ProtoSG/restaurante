import { useState } from "react";
import Dialog from "./Dialog";


export default function Buttom({ name, mesa}) {
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