export const getRandomValueId = (values: string[]): number => {
    return Math.floor(Math.random() * values.length)
}
export const getRandomValue = (rawValues: string | string[]): string => {
    const values = Array.isArray(rawValues) ? rawValues : [rawValues]
    console.log('values', rawValues, values)
    const randomValueId = getRandomValueId(values)
    return values[randomValueId]
}
