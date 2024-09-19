import { ISkillResponse } from '@myalisa/alisa-api';
import { IAudioReplyArgs } from './audio-reply.service.model.js';
export interface ICommandFactory {
    run: () => ISkillResponse;
}
export declare class CommandFactory implements ICommandFactory {
    constructor(command: string, options: IAudioReplyArgs);
    run(): ISkillResponse;
}
//# sourceMappingURL=factories.d.ts.map