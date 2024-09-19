import { AudioReplyService } from '@myalisa/audio-reply';
export const createRouter = (app) => {
    const audioReplyService = new AudioReplyService();
    app.get('/', () => {
        return 'Hi';
    });
    app.post('/', async (request) => {
        console.log('[Request]', request.body);
        const result = await audioReplyService.play(request.body, ["Hello it's me", "It's not me"]);
        return {
            response: {
                text: result,
                tts: `<speaker audio="dialogs-upload/7f76afa5-a075-405c-9773-fd8fe509c083/20279f08-31d4-42c5-b6ca-0bceaf8c712c.opus">`,
                end_session: true,
                directives: {},
            },
            session_state: {
                value: 10,
            },
            user_state_update: {
                value: 42,
            },
            application_state: {
                value: 37,
            },
            analytics: {
                events: [
                    {
                        name: 'custom event',
                    },
                    {
                        name: 'another custom event',
                        value: {
                            field: 'some value',
                            'second field': {
                                'third field': 'custom value',
                            },
                        },
                    },
                ],
            },
            version: '1.0',
        };
    });
};
