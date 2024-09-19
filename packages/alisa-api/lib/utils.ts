import { IAnalytics, ISkillResponse } from './models.js'

export const buildResponse = ({
    text,
    tts,
    directives,
    end_session,
    session_state,
    user_state_update,
    application_state,
    analytics,
    version,
}: {
    text: string
    tts?: string
    directives?: object
    end_session?: boolean
    session_state?: number
    user_state_update?: number
    application_state?: number
    analytics?: IAnalytics
    version?: string
}): ISkillResponse => {
    return {
        response: {
            text,
            tts: tts ?? text,
            end_session: end_session ?? true,
            directives: directives ?? {},
        },
        session_state: session_state
            ? {
                  value: session_state,
              }
            : { value: 10 },
        user_state_update: user_state_update
            ? {
                  value: user_state_update,
              }
            : { value: 42 },
        application_state: application_state
            ? {
                  value: application_state,
              }
            : { value: 37 },
        analytics,
        version: version ?? '1.0',
    }
}
