import { IRequestBody } from '@myalisa/alisa-api/index.js'

export interface IAudioReplyService {
    play: (request: IRequestBody, commandArgs: unknown) => Promise<void>
}
