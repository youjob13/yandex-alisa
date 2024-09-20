import { buildResponse, ISkillResponse } from '@myalisa/alisa-api'
import { getRandomValue } from '@myalisa/shared'
import { IAudioReplyArgs } from './audio-reply.service.model.js'

class GreetingFactory implements ICommandFactory {
    constructor(private readonly options: IAudioReplyArgs) {}

    run() {
        const randomResourceId = getRandomValue(this.options.resourcesIds)
        return buildResponse({
            text: 'Your response',
            tts: `<speaker audio="dialogs-upload/${this.options.skillId}/${randomResourceId}.opus">`,
        })
    }
}
export interface ICommandFactory {
    run: () => ISkillResponse
}
export class CommandFactory implements ICommandFactory {
    constructor(command: string, options: IAudioReplyArgs) {
        let factory: ICommandFactory | null = null
        switch (command.toLowerCase()) {
            // ToDo: !!!
            case '':
            case 'я дома': {
                factory = new GreetingFactory(options)
                break
            }
        }
        if (factory == null) {
            throw new Error('Method is not implemented')
        }
        return factory
    }

    run() {
        /**
         * @description StubResponse
         * It should be never executed
         */
        return buildResponse({ text: 'Stub' })
    }
}
