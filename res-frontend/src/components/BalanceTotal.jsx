import React from 'react'
import UseTotal from '../hooks/useTotal'

export default function BalanceTotal() {

    const { total, loadingTotal, errorTotal} = UseTotal()

  return (
    <section className='py-8 px-8 bg-gradient-to-r from-bg-200 to-bg-300 row-span-2 rounded-2xl'>
        {
            loadingTotal ? (<p>Cargando...</p>)
            :(
                <>
                <h2 className='text-accent-200 text-2xl text-bold mb-10'>Total balance</h2>
                    <div className='h-[80%] flex justify-center items-center'>
                        <p className='text-3xl text-accent-100 '>$
                            <span className='ml-4 text-[6rem] text-primary-300 text-center'>
                                {total}
                            </span>
                        </p>
                    </div>
                </>
            )
        }
    </section>
  )
}
