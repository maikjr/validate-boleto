import { BoletosRepository } from '../../repositories/implementations/BoletosRepository'
import { BoletosUseCase } from './BoletosUseCase'
import { boletosController } from './BoletosController'

const boletoRepository = new BoletosRepository()

const boletoUseCase = new BoletosUseCase(
  boletoRepository,
)

const boletoController = new boletosController(boletoUseCase)

export { boletoUseCase, boletoController }
