const  { connection } = require('../services/conecction.bd')

const insertPlato = async ({nombre, precio}) => {
    try{
        await connection.execute(
            'INSERT INTO Plato (plato_name, plato_price) VALUES (?, ?)',
            [nombre, precio]
        )
        return { respones: 'Registro exitoso'}
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

module.exports = { insertPlato, getAllPlato, getPlatoById }