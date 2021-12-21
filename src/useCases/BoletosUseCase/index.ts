import { BoletosRepository } from '../../repositories/implementations/BoletosRepository'
import { BoletosUseCase } from './BoletosUseCase'
import { BoletosController } from './BoletosController'

const boletoRepository = new BoletosRepository()

const boletoUseCase = new BoletosUseCase(boletoRepository)

const boletoController = new BoletosController(boletoUseCase)

export { boletoUseCase, boletoController }
