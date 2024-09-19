import { AudioReplyService } from '@myalisa/audio-reply';
export const createRouter = (app) => {
    const audioReplyService = new AudioReplyService();
    app.get('/', () => {
        return 'Hi';
    });
    app.post('/', async (request) => {
        console.log('[Request]', request.body);
        await audioReplyService.play('i am home', {
            variants: ['watermellon hi hi'],
        });
        return { hello: 1 };
    });
};
