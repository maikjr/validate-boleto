import { IBoletosRepository } from '../IBoletosRepository'
import { Boleto } from '../../entities/Boleto'

import { BoletoFactory } from '../../services/FactoryBoleto'
import { GenerateBlocksAndBarCode } from '../../utils/GenerateBlocksAndBarCode'

export class BoletosRepository implements IBoletosRepository {
  processBoleto ({ code, type }): Boleto {
    const { barcode, blocks } = GenerateBlocksAndBarCode(type, code)

    const boletosFactory = new BoletoFactory().create(type, code)

    const isValid = boletosFactory.validateDac(blocks)

    if (!isValid) {
      throw new Error('Invalid line entered')
    }

    const objBoleto = {
      barCode: barcode,
      amount: boletosFactory.getAmount(),
      expirationDate: boletosFactory.getExpirationDate()
    }

    return objBoleto
  }
}
