export class Boleto {

  public barCode: string
  public amount: number
  public expirationDate: Date | string

  constructor (props) {
    Object.assign(this, props)
  }
}
