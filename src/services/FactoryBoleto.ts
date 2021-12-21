import { BoletosConvenioServices } from './implementations/BoletosConvenioServices'

export class BoletoFactory {
  create(type, code): BoletosConvenioServices {
    switch (type) {
      case 'convenio':
        return new BoletosConvenioServices(code)

      default: {
        console.log('Unknown Boleto Type...')
      }
    }
  }
}
