import { buildResponse } from '@myalisa/alisa-api';
import { getRandomValue } from '@myalisa/shared';
class GreetingFactory {
    constructor(options) {
        this.options = options;
    }
    run() {
        const randomResourceId = getRandomValue(this.options.resourcesIds);
        return buildResponse({
            text: 'Your response',
            tts: `<speaker audio="dialogs-upload/${this.options.yaDialogId}/${randomResourceId}.opus">`,
        });
    }
}
export class CommandFactory {
    constructor(command, options) {
        let factory = null;
        switch (command.toLowerCase()) {
            // ToDo: !!!
            case '':
            case 'я дома': {
                factory = new GreetingFactory(options);
                break;
            }
        }
        if (factory == null) {
            throw new Error('Method is not implemented');
        }
        return factory;
    }
    run() {
        /**
         * @description StubResponse
         * It should be never executed
         */
        return buildResponse({ text: 'Stub' });
    }
}
