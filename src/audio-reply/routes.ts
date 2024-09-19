import { IRequestBody } from '@myalisa/alisa-api'
import { AudioReplyService } from '@myalisa/audio-reply'
import { IAudioReplyService } from '@myalisa/audio-reply/lib/audio-reply.service.model.js'
import { FastifyInstance } from 'fastify'

export const createRouter = (app: FastifyInstance) => {
    const audioReplyService: IAudioReplyService = new AudioReplyService()
    const yaDialogId =
        process.env.YA_ID ?? '7f76afa5-a075-405c-9773-fd8fe509c083'
    const resourcesIds = ['20279f08-31d4-42c5-b6ca-0bceaf8c712c']

    app.get('/', () => {
        return 'Hi'
    })

    app.post('/', async (request) => {
        try {
            const body = request.body as IRequestBody
            return await audioReplyService.play(body, {
                yaDialogId,
                resourcesIds,
            })
        } catch (error) {
            app.log.error(error)
        }
    })
}
