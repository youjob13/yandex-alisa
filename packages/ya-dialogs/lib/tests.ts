import { IRequestBody } from './models.js'

export const MockRequest: IRequestBody = {
    meta: {
        client_id: '1',
        interfaces: { account_linking: {}, payments: {}, screen: {} },
        locale: 'ru-RU',
        timezone: 'UTC',
    },
    request: {
        command: 'test',
        markup: { dangerous_context: false },
        nlu: { entities: [], intents: [], tokens: [] },
        original_utterance: '',
        type: '',
    },
    session: {
        application: { application_id: '' },
        message_id: 1,
        new: true,
        session_id: '',
        skill_id: '',
        user: { user_id: '' },
        user_id: '',
    },
    version: '1.0',
}
