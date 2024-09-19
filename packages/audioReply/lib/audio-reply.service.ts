import {
    IAudioReplyService,
    IPlayOptions,
} from './audio-reply.service.model.js'

export class AudioReplyService implements IAudioReplyService {
    async play(command: string, options: IPlayOptions) {
        const variants = Array.isArray(options.variants)
            ? options.variants
            : [options.variants]

        const selectedVariant = Math.floor(Math.random() * variants.length)

        console.log(variants[selectedVariant])
    }
}
