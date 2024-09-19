import { IRequestBody } from '@myalisa/alisa-api/index.js'
import { IAudioReplyService } from './audio-reply.service.model.js'

export class AudioReplyService implements IAudioReplyService {
    async play({ request }: IRequestBody, commandArgs: unknown) {
        const command = request.command

        const commandFactory = new CommandFactory(command)
        const response = await commandFactory.run(commandArgs)
        return response
    }
}

interface ICommandFactory<TArgs, TResponse> {
    run: (args: TArgs) => Promise<TResponse>
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
class CommandFactory implements ICommandFactory<any, any> {
    constructor(command: string) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        let factory: ICommandFactory<any, any>
        switch (command) {
            case 'я дома': {
                factory = new GreetingFactory()
                break
            }
        }
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        return factory
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    async run(_args: unknown) {
        throw new Error('Method is not implemented')
    }
}

class GreetingFactory implements ICommandFactory<string | string[], string> {
    async run(rawVariants: string | string[]) {
        const variants = Array.isArray(rawVariants)
            ? rawVariants
            : [rawVariants]

        const selectedVariant = Math.floor(Math.random() * variants.length)

        return Promise.resolve(variants[selectedVariant])
    }
}
