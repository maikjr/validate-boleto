import moment from 'moment'

import { IBoletosService } from '../IBoletosService'

export class BoletosConvenioServices implements IBoletosService {
  constructor(private code: string) {}

  getAmount(): string {
    const amount = this.code.substring(4, 15)
    return (Number(amount) / 100).toFixed(2)
  }

  getExpirationDate(): any {
    const dateCode = this.code.slice(33, 37)
    const validateDate = moment(dateCode, 'YYYY-MM-DD').isValid()
      ? moment(dateCode).locale('pt-br')
      : null
    return validateDate
  }

  module10(bloco: string): number {
    const tamanhoBloco = bloco.length - 1
    const codigo = bloco.substr(0, tamanhoBloco)
    const reverseCode = codigo.split('').reverse()

    let soma = 0

    reverseCode.map((value, index) => {
      const math = parseInt(value) * (index % 2 == 0 ? 2 : 1)
      // se o resultado de math > 9 eu somo os algarismo antes de adicionar a soma
      if (math > 9) {
        soma += parseInt(math.toString()[0]) + parseInt(math.toString()[1])
      } else {
        soma += math
      }
    })

    return Math.ceil(soma / 10) * 10 - soma
  }

  module11(bloco: string): number {
    const tamanhoBloco = bloco.length - 1
    const codigo = bloco.substr(0, tamanhoBloco)
    const reverseCode = codigo.split('').reverse()

    let soma = 0

    reverseCode.map((value, index) => {
      soma += parseInt(value) * (2 + (index >= 8 ? index - 8 : index))
      // se o resultado de math > 9 eu somo os algarismo antes de adicionar a soma
    })

    const divisao = soma % 11

    if (divisao === 0 || divisao === 1) {
      return 0
    } else if (divisao === 10) {
      return 1
    } else {
      return Math.ceil(divisao / 11) * 11 - divisao
    }
  }

  validateDac(blocos: string[]): boolean {
    let isValid = 0

    blocos.map((bloco, index) => {
      const lastNumberBlock = bloco[bloco.length - 1]
      if (['6', '7'].includes(this.code[2])) {
        const resultModule = this.module10(bloco)
        if (resultModule === parseInt(lastNumberBlock)) {
          isValid++
        }
      } else {
        const resultModule = this.module11(bloco)
        if (resultModule === parseInt(lastNumberBlock)) {
          isValid++
        }
      }
    })

    if (isValid === 4) {
      return true
    }

    return false
  }
}
