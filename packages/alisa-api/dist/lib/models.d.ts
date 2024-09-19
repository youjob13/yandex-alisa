interface IMeta {
    locale: string | 'ru-RU' | 'en-EN';
    timezone: string | 'UTC';
    client_id: string;
    interfaces: {
        screen: object;
        payments: object;
        account_linking: object;
    };
}
export interface ISession {
    message_id: number;
    session_id: string;
    skill_id: string;
    user: {
        user_id: string;
    };
    application: {
        application_id: string;
    };
    new: boolean;
    user_id: string;
}
export interface IAlisaRequest {
    command: string;
    original_utterance: string;
    nlu: {
        tokens: any[];
        entities: any[];
        intents: object;
    };
    markup: {
        dangerous_context: boolean;
    };
    type: string | 'SimpleUtterance';
}
export interface IRequestBody {
    meta: IMeta;
    session: ISession;
    request: IAlisaRequest;
    version: string;
}
export {};
//# sourceMappingURL=models.d.ts.map