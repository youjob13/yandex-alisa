import { type IRequestBody, CommandFactory } from '@myalisa/ya-dialogs'
import type { IRandomPicker } from '@myalisa/shared'
import type { IAudioReplyService } from './audio-reply.service.model.js'

export class AudioReplyService implements IAudioReplyService {
    constructor(private readonly picker: IRandomPicker<string>) {}

    play({ request, session }: IRequestBody) {
        const { command } = request

        const commandFactory = new CommandFactory(command, {
            skillId: session.skill_id,
            resourceId: this.picker.pick()!,
        })
        return commandFactory.run()
    }
}
