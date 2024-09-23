import assert from 'node:assert'
import { describe, it } from 'node:test'
import { getRandomValue, shuffleArray } from './utils.js'

describe('getRandomValue', () => {
    it('get random value from option list', () => {
        const options = ['Value 1', 'Value 2', 'Value 3']
        const randomValue = getRandomValue(options)
        const actualResult = options.includes(randomValue)
        assert.equal(actualResult, true)
    })

    it('get random value if only one option has been provided', () => {
        const option = 'Value 1'
        const actualResult = getRandomValue(option)
        assert.equal(actualResult, option)
    })
})

describe('shuffleArray', () => {
    it(`original array values order shouldn't repeat copy array values order`, () => {
        const originalValues = ['Value 1', 'Value 2', 'Value 3']
        const actualResult = shuffleArray(originalValues)
        assert.equal(actualResult.length, originalValues.length)
        assert.notDeepStrictEqual(actualResult, originalValues)
    })
})
