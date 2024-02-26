const { connection } = require('../services/conecction.bd')

const insertVenta = async ({date, hour, mesa_id, plato_id, cantidad}) => {
    try{
        await connection.execute(
            'INSERT INTO Venta (venta_date, venta_time, mesa_id, plato_id, cantidad) VALUES (?, ?, ?, ?, ?)',
            [date, hour, mesa_id, plato_id, cantidad]
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
            'SELECT * FROM Venta'
        )
        'SELECT c.id_curso, c.nombre, c.codigo_curso, c.nivel, c1.nombre as requisito, c.id_creador_curso FROM curso c LEFT JOIN curso c1 ON c.id_requisito = c1.id_curso JOIN administrador a ON a.id_administrador = c.id_creador_curso;'
    
        return ventas;
    }catch(e){
        console.error(e)
        throw e
    }
}

const getVentaById = async ({id}) => {
    try{
        const [ venta ] = await connection.query(
            'SELECT * FROM Ventas WHERE venta_id = ?',
            [id]
        )
        return venta;
    }catch(e){
        console.error(e)
        throw e
    }
}

module.exports = { insertVenta, getAllVentas, getVentaById}