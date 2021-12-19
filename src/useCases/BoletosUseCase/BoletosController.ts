
   
import { Request, Response } from 'express'
import { BoletosUseCase } from './BoletosUseCase'

export class boletosController {
  constructor(private boletosUseCase: BoletosUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { code } = request.params
    try {
      const boleto = await this.boletosUseCase.execute({
        code,
      })
      return response.status(200).send({ boleto })
    } catch (err) {
      return response.status(400).json({
        message: err.message || 'Unexpected error.'
      })
    }
  }
}