const { connection } = require('../services/conecction.bd')

const insertVenta = async ({date, hour, mesa_id}) => {
    try{
        await connection.execute(
            'INSERT INTO Venta (venta_date, venta_time, mesa_id, estado) VALUES (?, ?, ?, ?)',
            [date, hour, mesa_id, true ]
        )
        return { response: "Registro exitoso"}
    } catch(e){
        console.error(e)
        throw e
    }
}

const getAllVentas = async () => {
    try{
        const [ ventas ] = await connection.query(
            "SELECT Venta.venta_id, Venta.venta_date, Venta.venta_time, JSON_OBJECT('mesa_id', Mesa.mesa_id, 'mesa_name', Mesa.mesa_name) AS mesa, Venta.estado FROM Venta JOIN Mesa ON Venta.mesa_id = Mesa.mesa_id;"
        );
    
        return ventas;
    }catch(e){
        console.error(e)
        throw e
    }
}

const getVentaById = async ({id}) => {
    try{
        const [venta] = await connection.query(
            "SELECT Venta.venta_id, Venta.venta_date, Venta.venta_time, JSON_OBJECT('mesa_id', Mesa.mesa_id, 'mesa_name', Mesa.mesa_name) AS mesa, Venta.estado FROM Venta JOIN Mesa ON Venta.mesa_id = Mesa.mesa_id WHERE Venta.venta_id = ?",
            [id]
        );
        return venta;
    }catch(e){
        console.error(e)
        throw e
    }
}

module.exports = { insertVenta, getAllVentas, getVentaById}