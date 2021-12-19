
import { Boleto } from "../entities/Boleto";

export interface IBoletosRepository {
  processBoletoCovenio(code: string): Boleto
}