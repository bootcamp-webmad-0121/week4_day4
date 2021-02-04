const express = require('express')
const router = express.Router()

// Endpoints
router.get('/', (req, res) => res.send('SOY EL INDICE DE VUELOS, VE AL BUSCADOR ANDA CENUTRIO'))

// Formulario de vuelos
router.get('/buscar', (req, res) => res.render('flights-search-form'))
router.get('/resultados', (req, res) => res.render('flights-search-results', req.query))




module.exports = router