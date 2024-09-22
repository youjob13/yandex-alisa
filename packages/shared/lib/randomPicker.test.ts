import assert from 'node:assert'
import { describe, it } from 'node:test'
import { RandomPicker } from './randomPicker.js'

describe('RandomPicker', () => {
    it('pick method should be implemented', () => {
        const expectedResult = 1
        const picker = new RandomPicker([expectedResult])
        const actualResult = picker.pick()
        assert.equal(actualResult, expectedResult)
    })
})
