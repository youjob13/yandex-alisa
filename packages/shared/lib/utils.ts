export const getRandomValueId = (values: string[]): number => {
    return Math.floor(Math.random() * values.length)
}
export const getRandomValue = (rawValues: string | string[]): string => {
    const values = Array.isArray(rawValues) ? rawValues : [rawValues]
    const randomValueId = getRandomValueId(values)
    return values[randomValueId]
}

export const shuffleArray = <T>(array: T[]): T[] => {
    const copyArray = [...array]
    for (let i = copyArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))
        ;[copyArray[i], copyArray[j]] = [copyArray[j], copyArray[i]]
    }
    return copyArray
}
