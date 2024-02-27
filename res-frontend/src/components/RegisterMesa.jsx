import React, { useState } from 'react';
import { putMesa } from '../services/mesa';
import Button from './Button';
import Input from './Input';

export default function RegisterMesa() {

    const[query, setQuery] = useState('')

    const handleChange = (e) => {
        setQuery(e.target.value);
    }

    const handleSubmit = (e) => {
        putMesa({query});
    }

  return (
    <section className=' bg-bg-300 px-4 py-8 rounded-3xl shadow-2xl shadow-black  '>
        <form onSubmit={handleSubmit} className='flex gap-6 ' >
            <Input
                type = {"text"}
                placeholder={'Nombre de la mesa...'}
                value = {query}
                onChange = {handleChange}
            />
            <Button name = {'Registrar'}/>
        </form>
    </section>
  )
}   
