import { AudioReplyService } from '@myalisa/audio-reply';
export const createRouter = (app) => {
    const audioReplyService = new AudioReplyService();
    app.post('/', async (request) => {
        app.log.info('[Request]', request);
        await audioReplyService.play();
        return { hello: 1 };
    });
};
