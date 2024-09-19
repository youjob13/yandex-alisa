import { AudioReplyService } from '@myalisa/audio-reply';
export const createRouter = (app) => {
    var _a;
    const audioReplyService = new AudioReplyService();
    const yaDialogId = (_a = process.env.YA_ID) !== null && _a !== void 0 ? _a : '7f76afa5-a075-405c-9773-fd8fe509c083';
    const resourcesIds = ['20279f08-31d4-42c5-b6ca-0bceaf8c712c'];
    app.get('/', () => {
        return 'Hi';
    });
    app.post('/', async (request) => {
        try {
            const body = request.body;
            return await audioReplyService.play(body, {
                yaDialogId,
                resourcesIds,
            });
        }
        catch (error) {
            app.log.error(error);
        }
    });
};
