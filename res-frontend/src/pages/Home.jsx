import React from 'react'
import {mesas} from '../data/data'

function GetMesas(){
    return(
        <div className='grid grid-cols-3 gap-10'>
            {
            mesas.map((mesa) => (
                <div key={mesa.id} className='flex items-center justify-center w-full h-20 bg-bg-200 rounded-md m-2'>
                    <p className='text-text-100'>{mesa.mesa}</p>
                </div>
            ))
        }       
        </div>
    )
}


export default function Home() {
  return (
      <section className='w-full'>
        <GetMesas/>
    </section>
  )
}
