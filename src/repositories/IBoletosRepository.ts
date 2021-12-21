import { Boleto } from '../entities/Boleto'

export interface IBoletosRepository {
  processBoleto(boleto): Boleto
}
