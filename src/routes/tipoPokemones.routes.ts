import { Router } from 'express'
import { getTipoPokemones } from '../controllers/tipoPokemon.controllers'

const router = Router()

router.get('/', getTipoPokemones)

export default router
