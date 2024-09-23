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

    it(`pick method shouldn't pick the same value twice`, () => {
        const picker = new RandomPicker([0, 1])
        const actualResult1 = picker.pick()
        const actualResult2 = picker.pick()
        assert.notEqual(actualResult1, actualResult2)
    })
})
