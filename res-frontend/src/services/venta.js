const postVenta = async ({mesa}) => {
    try{
        const fechaActual = new Date();
        fechaActual.setHours(fechaActual.getHours() - 5);

        const data = {
            date: fechaActual.toISOString().slice(0, 10),
            hour: fechaActual.toISOString().slice(11, 19),
            mesa_id: mesa.id
        }

        const response = await fetch('http://localhost:3000/venta', {
            method: 'POST',
            headers:{
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(data)
        })

        if(!response.ok){
            throw new Error("Hubo un problema al enviar la  solicitud " + response.status )
        }

        const responseData = await response.json();
        console.log('Respuesta del servidor:', responseData);
    }catch(e){
        console.error(e)
        throw e
    }
};

const getLastVenta = async ({mesa}) => {
    try{
        const response = await fetch(`http://localhost:3000/venta/last/${mesa.id}`)
    
        if(!response.ok){
            throw new Error('Hubo un problema en la solicitud: ' + response.status);
        }

        const venta = await response.json()
        if(venta.length > 0){
            return {
                id: venta[0].venta_id,
                date: venta[0].venta_date,
                time: venta[0].venta_time,
                mesa: {
                    id : venta[0].mesa.mesa_id,
                    name : venta[0].mesa.mesa_name
                },
                estado: venta[0].estado,
                total: venta[0].venta_total
            };
        }

        return null;

    } catch (e){
        console.error(e)
        throw e
    }
}

const getTotal = async () =>{
    try{
        const fechaActual = new Date();
        fechaActual.setHours(fechaActual.getHours() - 5);

        const data = {
            date: fechaActual.toISOString().slice(0, 10),
        }

        const response = await fetch(`http://localhost:3000/venta/total/${data.date}`);

        if (!response.ok){
            throw new Error('Hubo un problema en la solicitud: ' + response.status);
        }

        const total = await response.json()
        console.log("Total: ",  total)
        return total[0].total
    }catch (e){
        console.error(e)
        throw e
    }
} 

const putVenta = async ({id, estado}) => {
    try{
        const response = await fetch(`http://localhost:3000/venta/${id}`,{
            method: 'PUT',
            headers:{
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({estado})
        })
        if (!response.ok){
            throw new Error('Hubo un problema en la solicitud: ' + response.status);
        }

        const responseData = await response.json();
        console.log('Respuesta del servidor:', responseData);
    } catch(e){
        console.error(e)
        throw e
    }
}

const getAll = async () => {
    try{
        const response = await fetch("http://localhost:3000/venta")

        if (!response.ok){
            throw new Error('Hubo un problema en la solicitud: ' + response.status);
        }

        const ventas = await response.json();
        
        return ventas?.map(venta =>({
            time : venta.venta_date.substring(0, 10),
            value : venta.venta_total
        }))

    }catch(e){
        console.error(e)
        throw e
    }
}

export { getAll, getLastVenta, getTotal, postVenta, putVenta };

