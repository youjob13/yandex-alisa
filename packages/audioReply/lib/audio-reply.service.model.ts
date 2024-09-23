import type { IRequestBody, ISkillResponse } from '@myalisa/ya-dialogs'

export interface IAudioReplyService {
    play: (request: IRequestBody) => ISkillResponse
}
