const express = require('express')
const router = express.Router()

// Endpoints
router.get('/', (req, res) => res.render('index'))



// Login form
router.get('/inicio-sesion', (req, res) => res.render('login-form'))
router.post('/inicio-sesion', (req, res) => {

    console.log('-----------------------')
    console.log('Las peticiones de tipo POST se almacenan en req.body:', req.body)
    console.log('El email es:', req.body.emailValue)
    console.log('La pwd es:', req.body.passwordValue)
    console.log('-----------------------')

    res.send(`<p>El email indicado es ${req.body.emailValue} y la contraseña ${req.body.passwordValue}, ¡mira la consola!</p>`)
})


module.exports = router
