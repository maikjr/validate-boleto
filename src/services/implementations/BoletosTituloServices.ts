import { IBoletosService } from '../IBoletosService'

export class BoletosTituloServices implements IBoletosService {
  constructor (private code: string) {}

  getAmount (): string {
    const amount = this.code.substr(37, 10)
    return (Number(amount) / 100).toFixed(2)
  }

  getExpirationDate (): any {
    const fatorVencimento = this.code.substr(33, 4)

    if (parseInt(fatorVencimento) == 0) return null

    const dataBase = new Date()
    const vencimentoBoleto = new Date()

    dataBase.setFullYear(1997, 9, 7)
    vencimentoBoleto.setTime(
      dataBase.getTime() + 1000 * 60 * 60 * 24 * parseInt(fatorVencimento)
    )

    return vencimentoBoleto
  }

  module10 (bloco: string): number {
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

  module11 (bloco: string): number {
    let soma = 0
    let peso = 2
    const base = 9
    const contador = bloco.length - 1
    for (let i = contador; i >= 0; i--) {
      soma = soma + parseInt(bloco.substring(i, i + 1)) * peso
      if (peso < base) {
        peso++
      } else {
        peso = 2
      }
    }
    let digito = 11 - (soma % 11)
    if (digito > 9) digito = 0
    if (digito == 0) digito = 1
    return digito
  }

  validateDac (blocos: string[]): boolean {
    let isValid = 0

    blocos.map((bloco, index) => {
      const lastNumberBlock = bloco[bloco.length - 1]
      const resultModule10 = this.module10(bloco)
      if (resultModule10 === parseInt(lastNumberBlock)) {
        isValid++
      }
    })

    if (isValid === 3) {
      return true
    }

    return false
  }
}
