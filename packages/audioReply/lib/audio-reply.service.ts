import { IRequestBody } from '@myalisa/alisa-api'
import {
    IAudioReplyArgs,
    IAudioReplyService,
} from './audio-reply.service.model.js'
import { CommandFactory } from './factories.js'

export class AudioReplyService implements IAudioReplyService {
    play({ request }: IRequestBody, args: IAudioReplyArgs) {
        const { command } = request

        const commandFactory = new CommandFactory(command, args)
        return commandFactory.run()
    }
}
