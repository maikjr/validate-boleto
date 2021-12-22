import { BoletosRepository } from '../../repositories/implementations/BoletosRepository'

import { validateBoletoType } from '../../utils/ValidateBoletoType'

describe('Test, boletos', () => {
  it('Validate convenio is valid', () => {
    const boletoType = validateBoletoType(
      '836400000011331201380002812884627116080136181551'
    )

    expect(boletoType.type).toEqual('convenio')
  })

  it('Validate titulo is valid', () => {
    const boletoType = validateBoletoType(
      '42297115040000195441160020034520268610000054659'
    )

    expect(boletoType.type).toEqual('titulo')
  })
  it('Validate boleto is not valid', () => {
    const boletoType = validateBoletoType(
      '83640000001133120-138000281288.4627116080136181551'
    )
    expect(boletoType).toBeUndefined()
  })
  it('Convenio valid', () => {
    const boleto = new BoletosRepository()

    const processorBoleto = boleto.processBoleto({
      code: '836400000011331201380002812884627116080136181551',
      type: 'convenio'
    })

    expect(processorBoleto).toEqual(
      expect.objectContaining({
        barCode: expect.any(String)
      })
    )
  })
  it('Titulo valid', () => {
    const boleto = new BoletosRepository()

    const processorBoleto = boleto.processBoleto({
      code: '42297115040000195441160020034520268610000054659',
      type: 'titulo'
    })

    expect(processorBoleto).toEqual(
      expect.objectContaining({
        barCode: expect.any(String)
      })
    )
  })
})
