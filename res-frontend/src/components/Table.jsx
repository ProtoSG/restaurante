export default function Table({mesa, pedidos}){
    console.log(pedidos)
    return(
       <div className="relative h-[80%]">
         <table className="w-full text-text-200 text-2xl ">
            <thead>
                <tr className="border-b-2">
                    <th className="py-8">Cantidad</th>
                    <th>Nombre</th>
                    <th>Precio</th>
                </tr>
            </thead>
            <tbody>
                {
                    pedidos.map((orden, index) => (
                        <tr key={index} className="border-t-2 text-center">
                            <td className="py-4">{orden.cantidad}</td>
                            <td>{orden.nombre}</td>
                            <td>{orden.precio}</td>
                        </tr>
                    ))
                }
            </tbody>
            <tfoot>
                <tr className="text-center border-t-4 border-accent-200 absolute w-full bottom-0 flex justify-between items-center">
                    <td className="text-left py-4" colSpan="2">Total:</td>
                    <td className="pr-[10%] text-3xl font-bold" >S/ </td>
                </tr>
            </tfoot>
        </table>
       </div>
    )
}