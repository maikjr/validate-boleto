import {IBoletosRepository } from '../IBoletosRepository'
import { Boleto } from '../../entities/Boleto'

import {BoletosServices} from '../../services/implementations/BoletosServices'


export class BoletosRepository implements IBoletosRepository {
  processBoletoCovenio (code: string): Boleto {
    let blocos = [];
    blocos[0] = code.substr(0, 12);
    blocos[1] = code.substr(12, 12);
    blocos[2] = code.substr(24, 12);
    blocos[3] = code.substr(36, 12);

    const barCode = [
      code.slice(0, 11),
      code.slice(12, 23),
      code.slice(24,35),
      code.slice(36, 47)
    ].join('')

    const boletosServices = new BoletosServices(code);
  

    const isValid = boletosServices.validateDac(blocos);

    if(!isValid){
      throw new Error('Invalid line entered')
    }

    const objBoleto = {
      barCode,
      amount: boletosServices.getAmount(),
      expirationDate: boletosServices.getExpirationDate()
    }

    return objBoleto;

  }
  
}
