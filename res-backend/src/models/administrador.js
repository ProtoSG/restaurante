const { connection } = require('../services/conecction.bd');

const postAdmin = async ({ username, hashPass, apellidos, nombres }) => {
    try {
        await connection.execute(
            "INSERT INTO Administrador (admin_nombres, admin_apellidos, admin_username, admin_password, admin_rol) VALUES (?, ?, ?, ?, ?)",
            [nombres, apellidos, username, hashPass, "ROL_ADMINISTRADOR"]
        );
        return { response: 'Registro exitoso' };
    } catch (e) {
        console.error(e);
        throw e;
    }
};

module.exports = { postAdmin };
