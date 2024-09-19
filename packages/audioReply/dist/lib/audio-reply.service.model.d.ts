export interface IPlayOptions {
    variants: string[] | string;
}
export interface IAudioReplyService {
    play: (command: string, options: IPlayOptions) => Promise<void>;
}
//# sourceMappingURL=audio-reply.service.model.d.ts.map