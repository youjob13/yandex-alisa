import assert from 'node:assert'
import { describe, it } from 'node:test'
import { ResponseBuilder } from './response-builder.js'
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
        const actualResponse = new ResponseBuilder({
            text: expectedResponse.response.text,
            tts: expectedResponse.response.tts,
        }).build()

        assert.deepStrictEqual(actualResponse, expectedResponse)
    })

    it('return valid response. [Full]', () => {
        const expectedResponse = {
            version: '1.0',
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
        }
        const actualResponse = new ResponseBuilder({
            text: expectedResponse.response.text,
            tts: expectedResponse.response.tts,
        })
            .withSessionState(expectedResponse.session_state.value)
            .withUserState(expectedResponse.user_state_update.value)
            .withAppState(expectedResponse.application_state.value)
            .withAnalytics(expectedResponse.analytics)
            .build()

        assert.deepStrictEqual(actualResponse, expectedResponse)
    })
})
