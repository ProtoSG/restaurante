import {mesas} from '../data/data'
import Buttom from './Buttom'

export default function ListMesas(){
    

    return(
        <div className='grid grid-cols-3 gap-10 '>
            {
            mesas.map((mesa) => (
                
                <div key={mesa.id} className='flex flex-col items-center justify-evenly w-full h-40 bg-bg-200  m-2 text-text-100 px-4 rounded-3xl shadow-2xl '>
                    <p className='text-2xl'>Mesa {mesa.mesa}</p>
                    <span className='text-xl'>Total: {mesa.ordenes.reduce((acc, curr) => acc + curr.precio * curr.cantidad, 0).toFixed(2)}</span>
                    <Buttom name = {"Entrar"} mesa={mesa}/>
                </div>
            
            ))
        }       
        </div>
    )
}