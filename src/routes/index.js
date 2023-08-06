import { Router } from "express"
const router = Router()

router.get('/', (req, res) => res.render('index', { title: 'Node.js  App Proyect'}))
router.get('/somos', (req, res) => res.render('somos', {title: 'Quienes Somos'}))
router.get('/servicios', (req, res) => res.render('servicios', {title: 'Servicios'}))
router.get('/portafolio', (req, res) => res.render('portafolio', {title: 'Portafolio'}))
router.get('/contacto', (req, res) => res.render('contacto', {title: 'Contacto'}))
router.get('/testimonios', (req, res) => res.render('testimonios', {title: 'Testimonios de Clientes'}))

export default router
