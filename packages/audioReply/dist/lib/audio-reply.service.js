export class AudioReplyService {
    async play(command, options) {
        const variants = Array.isArray(options.variants)
            ? options.variants
            : [options.variants];
        const selectedVariant = Math.floor(Math.random() * variants.length);
        console.log(variants[selectedVariant]);
    }
}
