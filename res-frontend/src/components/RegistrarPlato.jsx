import { useState } from "react";
import Pedido from '../model/pedido';
import Button from "./Button";
import Input from "./Input";

export default function RegistrarPlato({pedidos, setPedidos}){

    const [cantidad, setCantidad] = useState('')
    const [nombre, setNombre] = useState('')
    const [precio, setPrecio] = useState('')

    

    const createPedido = () => {
        const pedido = new Pedido(cantidad, nombre, precio)
        setPedidos([...pedidos, pedido])
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        if( name === "nombre" ) setNombre(value);
        if( name === "precio" ) setPrecio(value);
        if( name === "cantidad" ) setCantidad(value);
    }


    const handleSubmit = (e) => {
        e.preventDefault()
        createPedido()

        setNombre('');
        setPrecio('');
        setCantidad('');

        console.log("pedidos")
    }

    return(
        <section className="gap-5 mt-4">
            <form onSubmit={handleSubmit} className="flex gap-5  w-full">
                <Input
                    type = {"text"}
                    name={"nombre"}
                    placeholder={"Nombre..."}
                    value = {nombre}
                    onChange={ handleChange }
                    />
                <Input
                    type = {"text"}
                    name = {"precio"}
                    placeholder={"Precio..."}
                    value = {precio}
                    onChange={ handleChange } 
                />
                <Input
                    type = {"text"}
                    name = {"cantidad"}
                    placeholder={"Cantidad..."}
                    value={cantidad}
                    onChange={handleChange}
                />
                <Button name={"Agregar"} />
            </form>
        </section>
    )
}