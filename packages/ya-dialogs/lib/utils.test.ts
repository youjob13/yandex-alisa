import assert from 'node:assert'
import { describe, it } from 'node:test'
import { formatArrayDataToText } from './utils.js'

describe('formatArrayDataToText', () => {
    it('return valid text for skill response', () => {
        const rawArray = [{ name: 'A' }, { name: 'B' }, { name: 'C' }]
        const expectedResponse = 'ABC'
        const actualResponse = formatArrayDataToText(
            rawArray,
            (item) => item.name
        )
        assert.deepStrictEqual(actualResponse, expectedResponse)
    })
})
