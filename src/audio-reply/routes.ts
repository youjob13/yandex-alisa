import { FastifyInstance } from 'fastify'
import { IRequestBody } from '@myalisa/alisa-api'
import * as Config from '@myalisa/config'
import { AudioReplyService, IAudioReplyService } from '@myalisa/audio-reply'

export const createRouter = (app: FastifyInstance) => {
    const audioReplyService: IAudioReplyService = new AudioReplyService()

    app.get('/', () => {
        return 'Hi'
    })

    app.post('/', async (request) => {
        try {
            const body = request.body as IRequestBody
            app.log.debug(body, '[INCOMING_REQUEST]')

            const result = await audioReplyService.play(body, {
                skillId: Config.YaDialogs.GREETING.SKILL_ID,
                resourcesIds: Config.YaDialogs.GREETING.RESOURCES_IDS,
            })

            app.log.debug(result, '[AUDIO_REPLY/RESPONSE]')

            return result
        } catch (error) {
            app.log.error(error)
        }
    })
}
