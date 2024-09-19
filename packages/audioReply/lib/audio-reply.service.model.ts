import { IRequestBody, ISkillResponse } from '@myalisa/alisa-api'

export interface IAudioReplyService {
    play: (
        request: IRequestBody,
        commandArgs: IAudioReplyArgs
    ) => ISkillResponse
}
export interface IAudioReplyArgs {
    yaDialogId: string
    resourcesIds: string | string[]
}
