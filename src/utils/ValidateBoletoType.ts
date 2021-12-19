export type BoletoType = {
  type: string | undefined;
};

function validateBoletoType (code: string): BoletoType {
  if (/^[0-9]{47}$/.test(code)) {
    return {
      type: 'titulo'
    }
  }else if(/^[0-9]{48}$/.test(code)){
    return {
      type: 'covenio'
    }
  }
}

export { validateBoletoType }