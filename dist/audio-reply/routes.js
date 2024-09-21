import * as Config from '@myalisa/config';
import { AudioReplyService } from '@myalisa/audio-reply';
export const createRouter = (app) => {
    const audioReplyService = new AudioReplyService();
    app.get('/', () => {
        return 'Hi';
    });
    app.post('/', async (request) => {
        try {
            const body = request.body;
            app.log.info(body, '[INCOMING_REQUEST]');
            console.log(111, Config.YaDialogs.GREETING.RESOURCES_IDS);
            return await audioReplyService.play(body, {
                skillId: Config.YaDialogs.GREETING.SKILL_ID,
                resourcesIds: Config.YaDialogs.GREETING.RESOURCES_IDS,
            });
        }
        catch (error) {
            app.log.error(error);
        }
    });
};
