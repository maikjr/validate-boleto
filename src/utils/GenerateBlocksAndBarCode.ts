interface IGenerateBlocksAndBarCode {
  blocks: string[]
  barcode: string
}

function GenerateBlocksAndBarCode(
  type: string,
  code: string
): IGenerateBlocksAndBarCode {
  const blocks = []
  let barcode = ''

  switch (type) {
    case 'convenio':
      blocks[0] = code.substr(0, 12)
      blocks[1] = code.substr(12, 12)
      blocks[2] = code.substr(24, 12)
      blocks[3] = code.substr(36, 12)

      barcode =
        code.slice(0, 11) +
        code.slice(12, 23) +
        code.slice(24, 35) +
        code.slice(36, 47)

      return {
        blocks,
        barcode
      }

      break

    case 'titulo':
      blocks[0] = code.substr(0, 10)
      blocks[1] = code.substr(10, 11)
      blocks[2] = code.substr(21, 11)

      barcode =
        code.substr(0, 4) +
        code.substr(32, 15) +
        code.substr(4, 5) +
        code.substr(10, 10) +
        code.substr(21, 10)

      return {
        blocks,
        barcode
      }

      break

    default:
      return { blocks, barcode }
      break
  }
}

export { GenerateBlocksAndBarCode }
