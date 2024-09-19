import { CommandFactory } from './factories.js';
export class AudioReplyService {
    play({ request }, args) {
        const { command } = request;
        const commandFactory = new CommandFactory(command, args);
        return commandFactory.run();
    }
}
