import { BoletosConvenioServices } from './implementations/BoletosConvenioServices'
import { BoletosTituloServices } from './implementations/BoletosTituloServices'

export class BoletoFactory {
  create(type, code): BoletosConvenioServices | BoletosTituloServices {
    switch (type) {
      case 'convenio':
        return new BoletosConvenioServices(code)

      case 'titulo':
        return new BoletosTituloServices(code)
      default: {
        console.log('Unknown Boleto Type...')
      }
    }
  }
}
