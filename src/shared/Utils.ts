export const convertToArrayOfObjects = (object: any): Array<any> => {
  if (object) {
    const array: Array<Array<any>> = Object.entries(object)
    return array.map(item => {
      return {
        id: item[0],
        ...item[1]
      }
    })
  }
  return null
}
