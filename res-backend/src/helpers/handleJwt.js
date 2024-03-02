const { verify, sign } = require('jsonwebtoken')
require('dotenv').config()

const TOKEN_SECRET = process.env.TOKEN_SIGN

const createJwt = async({id, username, rol}) =>{
    // Se hace una firma de los datos del usuario
    const singUser = await sign({
        id,
        username,
        rol
    },
    TOKEN_SECRET
    )

    return singUser //Se devuelve el token
}

const verifyJwt = async (jwtToken) => {
    try{
        //verificamos el token utilizando la clave secreta.
        return await verify(jwtToken, TOKEN_SECRET)
    } catch(e){
        return e
    }
}

module.exports = {createJwt, verifyJwt}