import { IRequestBody } from '@myalisa/alisa-api'
import {
    CommandFactoryArgs,
    IAudioReplyService,
} from './audio-reply.service.model.js'
import { CommandFactory } from './factories.js'

export class AudioReplyService implements IAudioReplyService {
    play({ request }: IRequestBody, args: CommandFactoryArgs) {
        const { command } = request

        const commandFactory = new CommandFactory(command, args)
        return commandFactory.run()
    }
}
