const { connection } = require('../services/conecction.bd')

const insertVenta = async ({date, hour, mesa_id}) => {
    try{
        await connection.execute(
            'INSERT INTO Venta (venta_date, venta_time, mesa_id, estado, venta_total, venta_yape) VALUES (?, ?, ?, ?, ?, ?)',
            [date, hour, mesa_id, true, 0, 0]
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
            "SELECT venta_date, SUM(venta_total) AS venta_total FROM Venta group by venta_date ORDER by venta_date;"
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

const getLastVenta = async ({id}) => {
    try{
        // const total = await connection.query(
        //     "SELECT SUM(sub_total) FROM VentaPlato WHERE venta_id = ?",
        //     [id]
        // )
        const [venta] = await connection.query(
            "SELECT " +
                "Venta.venta_id, " +
                "Venta.venta_date, " +
                "Venta.venta_time, " +
                "JSON_OBJECT('mesa_id', Mesa.mesa_id, 'mesa_name', Mesa.mesa_name) AS mesa, " +
                "Venta.estado, " +
                "Venta.venta_total " +
            "FROM " +
                "Venta " +
            "JOIN " +
                "Mesa ON Venta.mesa_id = Mesa.mesa_id " +
            "WHERE " +
                "Venta.mesa_id = ? " +
            "ORDER BY " +
                "Venta.venta_id DESC " +
            "LIMIT 1;",
            [id]
        );
       
        return venta;
    }catch (e){
        console.error(e)
        throw e
    }
}

const updateVenta = async ({estado, id, yape}) => {
    try{
        if(estado !== null){
            await connection.execute(
                "UPDATE Venta SET " +
                    "estado = ?, " +
                    "venta_yape = ? " +
                "WHERE venta_id = ?;",
                [estado, yape,id]
            );
        } else{
            await connection.execute(
                "UPDATE Venta " +
                "SET " +
                    "venta_total = (SELECT SUM(sub_total) FROM VentaPlato WHERE venta_id = ?) "+
                "WHERE venta_id = ?;",
                [id, id]
            )
        }
        

        return  { response: "Cambio exitoso"}
    }catch (e){
        console.error(e)
        throw e
    }
}

const sumTotal = async ({date}) => {
    try{
        const [total] = await connection.query(
            "SELECT " +
                    "SUM(venta_total) AS total, " +
                    "SUM(venta_yape) AS yape " +
                "FROM Venta Where venta_date = ?;",
            [date]
        )

        return total;
    }catch (e){
        console.error(e)
        throw e
    }
}

module.exports = { insertVenta, getAllVentas, getVentaById, getLastVenta, updateVenta, sumTotal}