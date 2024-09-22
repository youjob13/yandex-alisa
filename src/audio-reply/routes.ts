import { FastifyInstance } from 'fastify'
import { IRequestBody } from '@myalisa/ya-dialogs'
import * as Config from '@myalisa/config'
import { AudioReplyService, IAudioReplyService } from '@myalisa/audio-reply'
import { IRandomPicker, RandomPicker } from '@myalisa/shared'

export const createRouter = (app: FastifyInstance) => {
    const picker: IRandomPicker<string> = new RandomPicker(
        Config.YaDialogs.GREETING.RESOURCES_IDS
    )
    const audioReplyService: IAudioReplyService = new AudioReplyService(picker)

    app.get('/', () => {
        return 'Hi'
    })

    app.post('/', async (request) => {
        try {
            const body = request.body as IRequestBody
            app.log.debug(body, '[INCOMING_REQUEST]')

            const result = await audioReplyService.play(body)
            app.log.debug(result, '[AUDIO_REPLY/RESPONSE]')

            return result
        } catch (error) {
            app.log.error(error)
        }
    })
}
