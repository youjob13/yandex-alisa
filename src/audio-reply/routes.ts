import { IRequestBody } from '@myalisa/alisa-api'
import { AudioReplyService } from '@myalisa/audio-reply'
import { FastifyInstance } from 'fastify'

export const createRouter = (app: FastifyInstance) => {
    const audioReplyService = new AudioReplyService()

    app.get('/', () => {
        return 'Hi'
    })

    app.post('/', async (request) => {
        console.log('[Request]', request.body)
        const result = await audioReplyService.play(
            request.body as IRequestBody,
            ["Hello it's me", "It's not me"]
        )
        return result
    })
}
