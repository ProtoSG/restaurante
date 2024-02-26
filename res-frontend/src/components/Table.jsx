export default function Table({mesa}){
    const total = mesa.ordenes.reduce((acc, curr) => acc + curr.precio, 0).toFixed(2)


    return(
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
                    mesa.ordenes.map((orden, index) => (
                        <tr key={index} className="border-t-2 text-center">
                            <td className="py-4">{orden.cantidad}</td>
                            <td>{orden.nombre}</td>
                            <td>{orden.precio}</td>
                        </tr>
                    ))
                }
            </tbody>
            <tfoot>
                <tr className="text-center border-t-4 border-accent-200 absolute w-[94%] bottom-0 flex justify-between items-center">
                    <td className="text-left py-4" colSpan="2">Total:</td>
                    <td className="pr-[10%] text-3xl font-bold" >S/ {total}</td>
                </tr>
            </tfoot>
        </table>
    )
}