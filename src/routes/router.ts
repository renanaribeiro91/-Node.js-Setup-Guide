import { Router } from 'express'
import { AuthUserController } from '../controller/authUserController'

const router = Router()

router.post('/authenticate', new AuthUserController().handle)

export { router }
