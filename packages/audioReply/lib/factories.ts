import { buildResponse, ISkillResponse } from '@myalisa/ya-dialogs'
import { getRandomValue } from '@myalisa/shared'
import {
    CommandFactoryArgs,
    IAudioReplyArgs,
    IFAQReplyArgs,
} from './audio-reply.service.model.js'

class FAQFactory implements ICommandFactory {
    constructor(private readonly options: IFAQReplyArgs) {}

    run() {
        return buildResponse({
            text: this.options.text ?? 'Your response',
            tts: this.options.tts ?? this.options.text,
            end_session: this.options.endSession ?? false,
        })
    }
}

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
    constructor(command: string, options: CommandFactoryArgs) {
        let factory: ICommandFactory | null = null
        switch (command.toLowerCase()) {
            case '': {
                factory = new GreetingFactory(options)
                break
            }
            default: {
                factory = new FAQFactory({
                    ...options,
                    text: 'Чтобы заставить говорить следующего кореша, скажи: "алиса еще". Чтобы остановить своих корешей, скажи: "алиса хватит"',
                })
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
