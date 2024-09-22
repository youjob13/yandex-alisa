import { buildResponse, ISkillResponse } from '@myalisa/ya-dialogs'
import assert from 'node:assert'
import { describe, it } from 'node:test'
import { CommandFactory, ICommandFactory } from './factories.js'

describe('FAQFactory', () => {
    it('return ', () => {
        const mockText = 'To start this skill do this ...'
        const factory: ICommandFactory = new CommandFactory('FAQ', {
            resourcesIds: [],
            skillId: '',
            text: mockText,
        })
        const actualResponse = factory.run()
        assert.deepStrictEqual(actualResponse.response.text, mockText)
    })

    it('return valid response. [Full]', () => {
        const expectedResponse: ISkillResponse = {
            response: {
                text: 'Stub text',
                tts: 'Stub TTS',
                end_session: true,
                directives: {},
            },
            session_state: {
                value: 111,
            },
            user_state_update: {
                value: 111,
            },
            application_state: {
                value: 111,
            },
            analytics: {
                events: [
                    {
                        name: 'test event',
                        value: [{ a: 1 }],
                    },
                ],
            },
            version: '1.0',
        }
        const actualResponse = buildResponse({
            text: expectedResponse.response.text,
            tts: expectedResponse.response.tts,
            analytics: expectedResponse.analytics,
            application_state: expectedResponse.application_state?.value,
            session_state: expectedResponse.session_state?.value,
            user_state_update: expectedResponse.user_state_update?.value,
        })
        assert.deepStrictEqual(actualResponse, expectedResponse)
    })
})
