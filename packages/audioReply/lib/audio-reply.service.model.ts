export interface IPlayOptions {
    variants: string[] | string
}

export interface IAudioReplyService {
    play: (command: string, options: IPlayOptions) => Promise<void>
}
