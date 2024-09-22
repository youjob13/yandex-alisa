import assert from 'node:assert'
import { describe, it } from 'node:test'
import { buildResponse } from './utils.js'
import { ISkillResponse } from './models.js'

describe('buildResponse', () => {
    it('return valid response. [Minimal]', () => {
        const expectedResponse: ISkillResponse = {
            response: {
                text: 'Stub text',
                tts: 'Stub TTS',
                end_session: true,
                directives: {},
            },
            session_state: undefined,
            user_state_update: undefined,
            application_state: undefined,
            analytics: undefined,
            version: '1.0',
        }
        const actualResponse = buildResponse({
            text: expectedResponse.response.text,
            tts: expectedResponse.response.tts,
        })
        assert.deepStrictEqual(actualResponse, expectedResponse)
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
