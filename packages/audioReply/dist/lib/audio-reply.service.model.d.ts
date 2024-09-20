import { IRequestBody, ISkillResponse } from '@myalisa/alisa-api';
export interface IAudioReplyService {
    play: (request: IRequestBody, commandArgs: IAudioReplyArgs) => ISkillResponse;
}
export interface IAudioReplyArgs {
    skillId: string;
    resourcesIds: string | string[];
}
//# sourceMappingURL=audio-reply.service.model.d.ts.map