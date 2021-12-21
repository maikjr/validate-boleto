import { IBoletosRepository } from '../../repositories/IBoletosRepository'
import { IBoletosRequestDTO } from './BoletosDTO'

import { validateBoletoType } from '../../utils/ValidateBoletoType'

export class BoletosUseCase {
  constructor (private boletos: IBoletosRepository) {}

  async execute(data: IBoletosRequestDTO) {
    const boletoType = validateBoletoType(data.code)

    if (!boletoType) {
      throw new Error('Invalid format.')
    }

    const processorBoleto = this.boletos.processBoleto({
      code: data.code,
      type: boletoType.type
    })
    return processorBoleto
  }
}
