type ValidItemValue = string | boolean | number
export const formatArrayDataToText = <T>(
    array: T[],
    getValueByKey: (item: T) => ValidItemValue = (item: T, key = 'name') =>
        item[key as keyof T] as ValidItemValue
): string => {
    if (typeof array[0] !== 'object') {
        return array.join(',')
    }

    return array.reduce((acc, item) => {
        acc += getValueByKey(item)
        return acc
    }, '')
}
