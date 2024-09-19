import { FastifyInstance } from 'fastify'
import * as AudioReply from './audio-reply/index.js'

export default (app: FastifyInstance) => {
    AudioReply.createRouter(app)
}
