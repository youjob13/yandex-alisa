import { AudioReplyService } from '@myalisa/audio-reply'
import { FastifyInstance } from 'fastify'

export const createRouter = (app: FastifyInstance) => {
    const audioReplyService = new AudioReplyService()

    app.post('/', async () => {
        await audioReplyService.play()
        return { hello: 1 }
    })
}
