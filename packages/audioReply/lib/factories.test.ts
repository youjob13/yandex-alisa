import { ISkillResponse } from '@myalisa/ya-dialogs'
import assert from 'node:assert'
import { describe, it } from 'node:test'
import { CommandFactory, ICommandFactory } from './factories.js'

describe('FAQFactory', () => {
    it('return helper-text', () => {
        const mockText = 'To start this skill do this ...'
        const factory: ICommandFactory = new CommandFactory('FAQ', {
            resourceId: '1',
            skillId: '',
            text: mockText,
        })
        const actualResponse = factory.run()
        assert.deepStrictEqual(actualResponse.response.text, mockText)
    })
})

describe('GreetingFactory', () => {
    it('return random selected audio', () => {
        const skillId = '0'
        const resourcesIds = ['1']
        const expectedResponse: ISkillResponse['response'] = {
            text: 'Your response',
            tts: `<speaker audio="dialogs-upload/${skillId}/${resourcesIds[0]}.opus">`,
            end_session: true,
            directives: {},
        }
        const factory: ICommandFactory = new CommandFactory('', {
            resourceId: '1',
            skillId,
            text: expectedResponse.text,
        })
        const actualResponse = factory.run()
        assert.deepStrictEqual(actualResponse.response, expectedResponse)
    })
})
