import type {
    IFAQReplyArgs,
    IAudioReplyArgs,
    CommandFactoryArgs,
    IRequestBody,
    ISkillResponse,
} from './models.js'
import { ResponseBuilder } from './response-builder.js'

class FAQFactory implements ICommandFactory {
    constructor(private readonly options: IFAQReplyArgs) {}

    run() {
        return new ResponseBuilder({
            text: this.options.text ?? 'Your response',
            tts: this.options.tts ?? this.options.text,
            end_session: this.options.endSession ?? false,
        })
    }
}

class AudioFactory implements ICommandFactory {
    constructor(private readonly options: IAudioReplyArgs) {}

    run() {
        return new ResponseBuilder({
            text: 'Your response',
        }).withAudio(this.options)
    }
}
export interface ICommandFactory {
    run: (request: IRequestBody) => ISkillResponse
}

export class CommandFactory implements ICommandFactory {
    constructor(private readonly options: CommandFactoryArgs) {}

    run(request: IRequestBody) {
        let factory: ICommandFactory | null = null
        switch (request.request.command.toLowerCase()) {
            case '': {
                factory = new AudioFactory(this.options)
                break
            }
            default: {
                factory = new FAQFactory(this.options)
                break
            }
        }
        if (factory.run == null) {
            throw new Error('Method is not implemented')
        }
        return factory.run(request)
    }
}
