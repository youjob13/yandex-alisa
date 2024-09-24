import { ISkillResponse, TestHelpers } from '@myalisa/ya-dialogs'
import assert from 'node:assert'
import { describe, it } from 'node:test'
import type { IAudioReplyService } from './audio-reply.service.model.js'
import { AudioReplyService } from './audio-reply.service.js'
import { RandomPicker } from '@myalisa/shared'

describe('FAQFactory', () => {
    it('return valid response', () => {
        const expectedResponse: ISkillResponse = {
            response: {
                text: 'Your response',
                tts: 'Your response',
                end_session: false,
                directives: {},
            },
            session_state: undefined,
            user_state_update: undefined,
            application_state: undefined,
            analytics: undefined,
            version: '1.0',
        }

        const audioReplyService: IAudioReplyService = new AudioReplyService(
            new RandomPicker(['1'])
        )
        const {
            response,
            version,
            analytics,
            application_state,
            session_state,
            user_state_update,
        } = audioReplyService.play(TestHelpers.MockRequest)

        const actualResponse = {
            response,
            version,
            analytics,
            application_state,
            session_state,
            user_state_update,
        }

        assert.deepStrictEqual(actualResponse, expectedResponse)
    })
})
