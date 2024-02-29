import { useEffect, useState } from 'react'
import { getAll } from '../services/venta'

export default function UseVenta() {

    const [ventas, setVentas] = useState([])
    const [loadingVentas, setLoadingVentas] = useState(false)
    const [errorVentas, setErrorVentas] = useState(null)

    useEffect(() =>{
        async function fetchVentas(){
            try{
                setLoadingVentas(true)
                setErrorVentas(null)
                const ventas = await getAll();
                setVentas(ventas)
            }catch (e) {
                setErrorVentas(e.message)
            }finally{
                setLoadingVentas(false)
            }
        }

        fetchVentas()
    }, [])

    return { ventas, loadingVentas, errorVentas}
}
