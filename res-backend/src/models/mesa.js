const { connection } = require('../services/conecction.bd')

const insertMesa = async ({name}) => {
    try{
        await connection.execute(
            'INSERT INTO Mesa (mesa_name) VALUES (?)',
            [name]
        )
        return { response: 'Registro exitoso'}
    } catch(e){
        console.error(e)
        throw e
    }
}

const getAllMesa = async () => {
    try{
        const [ mesas ] = await connection.query(
            'SELECT * FROM Mesa;'
        )
        return mesas
    } catch(e) {
        console.error(e)
        throw e
    }
}

const getMesaById = async ({id}) => {
    try{    
        const [ mesa ] = await connection.query(
            'SELECT * FROM Mesa WHERE mesa_id = ?',
            [id]
        )
        return mesa;
    } catch(e) {
        console.error(e)
        throw e
    }
}

module.exports = { insertMesa, getAllMesa, getMesaById }
