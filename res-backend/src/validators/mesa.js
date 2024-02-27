const { check } = require('express-validator')
const { validateResults } = require('../helpers/handleValidator')

const validateNewMesa = [
    check('name')
        .exists()
        .notEmpty(),
    (req, res, next) => validateResults(req, res, next)
]

module.exports = { validateNewMesa }