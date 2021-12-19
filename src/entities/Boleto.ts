export class Boleto {

  public barCode: string
  public amount: string
  public expirationDate: Date | string

  constructor (props) {
    Object.assign(this, props)
  }
}
