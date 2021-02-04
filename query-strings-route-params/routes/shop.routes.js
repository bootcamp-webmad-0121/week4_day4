const express = require('express')
const router = express.Router()

// Endpoints
router.get('/', (req, res) => res.send('SOY EL INDICE DE TIENDAS'))


// Route params
router.get('/temporada/:season/prendas/:clothe', (req, res) => {

    console.log('-------------------------')
    console.log('El objeto de los route params se almacena en req.params: ', req.params)
    console.log('El route param de la tempodara es: ', req.params.season)
    console.log('El route param del tipo de prenda es: ', req.params.clothe)
    console.log('-------------------------')

    res.send('MIRA LA CONSOLA')
})


// Query strings
router.get('/buscador', (req, res) => {

    console.log('-------------------------')
    console.log('El objeto de los query string se almacena en req.query: ', req.query)

    console.log('-------------------------')

    res.send('MIRA LA CONSOLA')
})




module.exports = router