import { IAnalytics, ISkillResponse } from './models.js';
export declare const buildResponse: ({ text, tts, directives, end_session, session_state, user_state_update, application_state, analytics, version, }: {
    text: string;
    tts?: string;
    directives?: object;
    end_session?: boolean;
    session_state?: number;
    user_state_update?: number;
    application_state?: number;
    analytics?: IAnalytics;
    version?: string;
}) => ISkillResponse;
//# sourceMappingURL=utils.d.ts.map