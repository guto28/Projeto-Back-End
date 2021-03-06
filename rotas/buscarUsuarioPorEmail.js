const verifyJWT = require('../middleware/verifyJWT')
const Exibir = require('../models/function')
 
module.exports = app => {
    app.post('/usuario/email', verifyJWT, (req, res) => {
        const email = req.body.email

        Exibir.buscarPorEmail(email)
            .then(resultados => res.status(200).json(resultados))
            .catch(erro => res.status(400).json(erro))
    })
}