const { insertPlato, getAllPlato, getPlatoById, getLastPlato, getRankPlato } = require('../models/plato');

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

const getLast = async(req, res) => {
    const plato = await getLastPlato();
    res.send(plato)
}

const getRank = async(req, res) => {
    const {date} = req.params;

    const platos = await getRankPlato({date});
    res.send(platos)
}

module.exports = { newPlato, getAll, getById, getLast, getRank }