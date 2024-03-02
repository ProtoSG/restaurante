const { connection } = require('../services/conecction.bd')

const getAdmin = async(username) => {
    try{
        const [admin] = await connection.query(
            "SELECT admin_id AS id, admin_nombres AS nombres, admin_apellidos AS apellidos, admin_username AS username, admin_password AS password, admin_rol AS rol FROM Administrador WHERE admin_username = ?",
           [username]
        )
        return admin
    } catch (e) {
        console.error(e)
        throw e
    }
}


module.exports = {getAdmin}