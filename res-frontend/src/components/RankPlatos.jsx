import React from 'react'
import UseRankPlato from '../hooks/useRankPlato'

export default function RankPlatos() {

    const {platos, laodingPlatos, errorPlatos} = UseRankPlato()

  return (
    <section className='pt-8 px-8 bg-bg-200 row-span-3 rounded-2xl'>
        <h2 className='text-accent-200 text-2xl text-bold '>Platos màs vendidos</h2>
        {
            laodingPlatos ?( <p>Cargando...</p>)
            :(platos.map((plato, index) =>(
                <div key={index} className='text-text-100 text-3xl px-4 pt-4 mt-4 flex justify-between'>
                    <p>{plato.name}</p>
                    <span>{plato.count}</span>
                </div>
            )))
        }
    </section>
  )
}
