import { IRequestBody, ISkillResponse } from '@myalisa/alisa-api'

export interface IAudioReplyService {
    play: (
        request: IRequestBody,
        commandArgs: CommandFactoryArgs
    ) => ISkillResponse
}
export interface IAudioReplyArgs extends IBaseReplyArgs {
    skillId: string
    resourcesIds: string | string[]
}
export interface IFAQReplyArgs extends IBaseReplyArgs {
    text?: string
    tts?: string
}
export interface IBaseReplyArgs {
    endSession?: boolean
}
export type CommandFactoryArgs = IAudioReplyArgs & IFAQReplyArgs
