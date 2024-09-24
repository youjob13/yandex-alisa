import { FastifyInstance } from 'fastify'
import * as AudioReply from './audio-reply/index.js'
import * as Annushka from './annushka/index.js'

export default (app: FastifyInstance) => {
    AudioReply.createRouter(app)
    Annushka.createRouter(app)
}
