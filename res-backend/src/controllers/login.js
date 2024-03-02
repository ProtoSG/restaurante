const { getAdmin } = require('./../models/login')
const { comparePass } = require('./../helpers/bcrypt')
const { createJwt } = require('./../helpers/handleJwt')

const loginAdmin = async(req, res) => {
    const { username, password } = req.body
    const response = await getAdmin(username)
    
    if(response.length === 0){
        res.status(404)
        res.send({error: 'User not found'})
        return
    }

    const checkPass = await comparePass(password, response[0].password)
    const {rol, id, nombres, apellidos } = response[0]

    if(checkPass){
        const jwt = await createJwt({id, username, rol})
        res.status(200)
        res.send({id, nombres, rol, username, apellidos, token: jwt})
    }else{
        res.status(401)
        res.send({error: 'Invalid Password'})
    }
}



module.exports = {loginAdmin}