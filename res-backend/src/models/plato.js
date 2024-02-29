const  { connection } = require('../services/conecction.bd')

const insertPlato = async ({nombre, precio}) => {
    try{
        const [result] = await connection.execute(
            'INSERT INTO Plato (plato_name, plato_price) VALUES (?, ?)',
            [nombre, precio]
        )

        const insertedId = result.insertId

        return { id: insertedId, response: 'Registro exitoso'}
    }catch(e){
        console.error(e)
        throw e
    }
}

const getAllPlato = async () => {
    try{
        const [ platos ] = await connection.query(
            'SELECT * FROM Plato;'
        )
        return platos;
    } catch(e){
        console.error(e)
        throw e
    }
}

const getPlatoById = async ({id}) => {
    try{
        const [ plato ] = await connection.query(
            'SELECT * FROM Plato WHERE plato_id = ?',
            [id]
        )
        return plato;
    } catch(e){
        console.error(e)
        throw e
    }
}

const getRankPlato = async({date}) => {
    try{
        const [platos] = await connection.query(
            "SELECT " +
                "p.plato_name, "+
                "SUM(vp.cantidad) AS cantidad_total "+
            "FROM " +
                "VentaPlato vp " +
            "JOIN " +
                "Plato p ON vp.plato_id = p.plato_id " +
            "JOIN " +
                "Venta v ON vp.venta_id = v.venta_id " +
            "WHERE "+
                "v.venta_date = ? " +
            "GROUP BY " +
                "p.plato_name " +
            "ORDER BY " +
                "cantidad_total DESC "+
            "LIMIT 8; ",
            [date]
        )

        return platos;
    }catch (e){
        console.error(e)
        throw e
    }
}
// Por el momento ya no es necesario
const getLastPlato = async () => {
    try{
        const [plato] = await connection.query(
            "SELECT * FROM Plato ORDER BY plato_id DESC LIMIT 1;"
        )
        return plato;
    }catch(e) {
        console.error(e)
        throw e
    }
}

module.exports = { insertPlato, getAllPlato, getPlatoById, getLastPlato, getRankPlato }