import { AudioReplyService } from '@myalisa/audio-reply';
export const createRouter = (app) => {
    const audioReplyService = new AudioReplyService();
    app.get('/', () => {
        return 'Hi';
    });
    app.post('/', async (request) => {
        console.log('[Request]', request.body);
        const result = await audioReplyService.play(request.body, ["Hello it's me", "It's not me"]);
        return result;
    });
};
