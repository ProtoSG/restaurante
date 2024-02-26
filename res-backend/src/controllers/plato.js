const { insertPlato, getAllPlato, getPlatoById } = require('../models/plato');

const newPlato = async (req, res) => {
    const { nombre, precio } = req.body;

    const response = await insertPlato({nombre, precio})
    res.status(201)
    res.send(response)  
}


const getAll = async (req, res) => {
    const platos = await getAllPlato();
    res.send(platos)
}

const getById = async(req, res) => {
    const { id } = req.params;

    const plato = await getPlatoById({id});
    res.status(201);
    res.send(plato)
}

module.exports = { newPlato, getAll, getById }