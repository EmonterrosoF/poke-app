import { Router } from 'express'
import { pokemones } from '../controllers/pokemones.controllers'

const router = Router()

router.get('/', pokemones)

export default router
