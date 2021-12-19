import { Router } from 'express'

import { boletoController } from './useCases/BoletosUseCase'

const router = Router()

router.get('/', (request, response) => {
  return response.status(201).json({ message: 'Hello, friend!' })
})

router.get('/boleto/:code', (request, response) => {
  return boletoController.handle(request, response)
})
export { router }