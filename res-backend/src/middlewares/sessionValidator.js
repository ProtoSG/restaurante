const { verifyJwt } = require('./../helpers/handleJwt');

const adminSession = async (req, res, next) => {
    try {
        if (req.headers.authorization === undefined) {
            res.status(401).send({ error: "No Token" });
            return;
        }

        const token = req.headers.authorization.split(' ').pop();
        const dataToken = await verifyJwt(token);

        if (dataToken.rol === 'ROL_ADMINISTRADOR') {
            // Si el token es válido y el rol es de administrador, permitir el acceso
            next();
        } else {
            res.status(401)
            res.send({ error: "Unauthorized" });
        }
    } catch (e) {
        // Si hay algún error al verificar el token
        res.status(401)
        res.send({ error: "Not session" });
    }
};

module.exports = {adminSession};
