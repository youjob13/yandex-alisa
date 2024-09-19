interface IMeta {
    locale: string | 'ru-RU' | 'en-EN'
    timezone: string | 'UTC'
    client_id: string
    interfaces: { screen: object; payments: object; account_linking: object }
}

export interface ISession {
    message_id: number
    session_id: string
    skill_id: string
    user: { user_id: string }
    application: { application_id: string }
    new: boolean
    user_id: string
}

export interface IAlisaRequest {
    command: string
    original_utterance: string
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    nlu: { tokens: any[]; entities: any[]; intents: object }
    markup: { dangerous_context: boolean }
    type: string | 'SimpleUtterance'
}

export interface IRequestBody {
    meta: IMeta
    session: ISession
    request: IAlisaRequest
    version: string
}

interface ISkillResponseObj {
    text: string
    tts: string
    end_session: boolean
    directives?: object
}
interface IValue {
    value: number
}
interface IAnalyticsEvent {
    name: string
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    value?: any
}
export interface IAnalytics {
    events: IAnalyticsEvent[]
}
export interface ISkillResponse {
    response: ISkillResponseObj
    session_state?: IValue
    user_state_update?: IValue
    application_state?: IValue
    analytics?: IAnalytics
    version: string
}
