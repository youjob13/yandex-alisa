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
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    constructor(command) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        // let factory: ICommandFactory<any, any>
        // switch (command.toLowerCase()) {
        //     case 'я дома':
        //     case 'i am home': {
        //         factory = new GreetingFactory()
        //         break
        //     }
        // }
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        return new GreetingFactory();
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
