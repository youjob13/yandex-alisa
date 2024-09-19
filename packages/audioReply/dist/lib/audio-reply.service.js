export class AudioReplyService {
    async play({ request }, commandArgs) {
        const command = request.command;
        const commandFactory = new CommandFactory(command);
        const response = await commandFactory.run(commandArgs);
        return response;
    }
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
class CommandFactory {
    constructor(command) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        let factory;
        switch (command) {
            case 'я дома': {
                factory = new GreetingFactory();
                break;
            }
        }
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        return factory;
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    async run(_args) {
        throw new Error('Method is not implemented');
    }
}
class GreetingFactory {
    async run(rawVariants) {
        const variants = Array.isArray(rawVariants)
            ? rawVariants
            : [rawVariants];
        const selectedVariant = Math.floor(Math.random() * variants.length);
        return Promise.resolve(variants[selectedVariant]);
    }
}
