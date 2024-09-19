import assert from 'node:assert';
import { describe, it } from 'node:test';
import { getRandomValue } from './utils.js';
describe('getRandomValue', () => {
    it('get random value from option list', () => {
        const options = ['Value 1', 'Value 2', 'Value 3'];
        const randomValue = getRandomValue(options);
        const actualResult = options.includes(randomValue);
        assert.equal(actualResult, true);
    });
    it('get random value if only one option is provided', () => {
        const option = 'Value 1';
        const actualResult = getRandomValue(option);
        assert.equal(actualResult, option);
    });
});
