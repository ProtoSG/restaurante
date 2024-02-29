import React from 'react'
import { putVenta } from '../services/venta'
import Button from './Button'

export default function RealizarPago({venta}) {

  const handleSubmit = async(e) => {
    await putVenta({estado:false, id:venta.id})
  }


  return (
    <div className='mt-8'>
        <form onSubmit={handleSubmit}>
          <Button name={"Pagar"}/>
        </form>
    </div>
  )
}
