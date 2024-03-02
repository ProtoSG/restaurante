const {postAdmin} = require('./../models/administrador')
const {encrypPass} = require('./../helpers/bcrypt')
const {getAdmin} = require('./../models/login')

const registerAdmin = async (req, res) => {
    try {
        const { nombres, apellidos, username, password } = req.body;
        console.log({ nombres, apellidos, username, password });

        const hashPass = await encrypPass(password);
        const userAdmin = await getAdmin({ username }); // Asegúrate de pasar el username dentro de un objeto

        console.log(hashPass)

        if (userAdmin.length !== 0) {
            res.status(400).send({ error: 'Usuario existente' });
            return;
        }

        const response = await postAdmin({ nombres, apellidos, username, hashPass });
        res.status(201)
        res.send(response);
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: 'Error interno del servidor' });
    }
};

module.exports = { registerAdmin };
