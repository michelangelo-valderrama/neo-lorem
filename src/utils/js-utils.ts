/**
 * Agrupa un array de objetos por un atributo.
 * @param array - Array de objetos a agrupar.
 * @param key - Atributo por el que agrupar.
 * @returns - Retorna un objeto con las propiedades agrupadas.
 */
export const groupBy = (array: any[], key: string) => {
  return array.reduce((preValue, curValue) => {
    ;(preValue[curValue[key]] = preValue[curValue[key]] || []).push(curValue)
    return preValue
  }, {})
}
