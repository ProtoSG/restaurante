const { connection } =  require("../services/conecction.bd")

const insertVentaPlato = async({venta_id, plato_id, cantidad, sub_total}) => {
    try{
        await connection.execute(
            "INSERT INTO VentaPlato (venta_id, plato_id, cantidad, sub_total) VALUES (?, ?, ?, ?)",
            [venta_id, plato_id, cantidad, sub_total]
        )

        return { response : "Registro exitoso"}
    }catch (e){
        console.error(e)
        throw e
    }
}

const getVentaPlatoByid = async({id}) => {
    try{
        const [venta_plato] = await connection.query(
            "SELECT " +
                "VentaPlato.venta_plato_id, " +
                "VentaPlato.venta_id, " +
                "JSON_OBJECT(" +
                    "'plato_id', Plato.plato_id, " +
                    "'plato_name', Plato.plato_name, " +
                    "'plato_price', Plato.plato_price " +
                ") AS plato, " +
                "VentaPlato.cantidad, " +
                "VentaPlato.sub_total " +
            "FROM " +
                "VentaPlato " +
            "JOIN " +
                "Plato ON VentaPlato.plato_id = Plato.plato_id " +
            "WHERE " +
                "VentaPlato.venta_id = ?;",
            [id]
        );

        return venta_plato;
    }catch (e){
        console.error(e)
        throw e
    }
}

const deleteVentaPlato = async({idVentaPlato, idPlato}) => {
    try{
        await connection.execute(
            "DELETE FROM VentaPlato WHERE venta_plato_id = ?;",
            [idVentaPlato]
            )

        await connection.execute(
            "DELETE FROM Plato WHERE Plato.plato_id = ?;",
            [idPlato]
        )

        return { response : "Eliminado de manera exitosa"}

    }catch (e){
        console.error(e)
        throw e
    }
}

module.exports = {insertVentaPlato, getVentaPlatoByid, deleteVentaPlato}