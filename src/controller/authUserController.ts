/* eslint-disable no-unused-vars */
import { Request, Response } from 'express'
import { AuthUserService } from '../services/authUserServices'

class AuthUserController {
  async handle (request:Request, response:Response) {
    const { code } = request.body
    const service = new AuthUserService()
    const result = await service.execute(code)

    return response.json(result)
  }
}

export { AuthUserController }
