import { IRequestBody, ISkillResponse } from '@myalisa/ya-dialogs'

export interface IAudioReplyService {
    play: (request: IRequestBody) => ISkillResponse
}
export interface IAudioReplyArgs extends IBaseReplyArgs {
    skillId: string
    resourceId: string
}
export interface IFAQReplyArgs extends IBaseReplyArgs {
    text?: string
    tts?: string
}
export interface IBaseReplyArgs {
    endSession?: boolean
}
export type CommandFactoryArgs = IAudioReplyArgs & IFAQReplyArgs
