export type BoletoType = {
  type: string | undefined
}
export interface IBoletosConvenioServices {
  getAmount: (code: string) => string
  getExpirationDate: (code: string) => any
  module10: (code: string) => number
  module11: (code: string) => number
  validateDac: (blocos: string[], code: string) => boolean
}
