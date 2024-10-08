import { ISkillResponse, TestHelpers } from '@myalisa/ya-dialogs'
import assert from 'node:assert'
import { describe, it } from 'node:test'
import { IAudioReplyService } from './audio-reply.service.model.js'
import { AudioReplyService } from './audio-reply.service.js'
import { RandomPicker } from '@myalisa/shared'

describe('FAQFactory', () => {
    it('return ', () => {
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
        const actualResponse = audioReplyService.play(TestHelpers.MockRequest)

        assert.deepStrictEqual(actualResponse, expectedResponse)
    })
})
