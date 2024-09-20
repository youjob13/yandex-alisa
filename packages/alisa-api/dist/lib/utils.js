export const buildResponse = ({ text, tts, directives, end_session, session_state, user_state_update, application_state, analytics, version, }) => {
    return {
        response: {
            text,
            tts: tts !== null && tts !== void 0 ? tts : text,
            end_session: end_session !== null && end_session !== void 0 ? end_session : true,
            directives: directives !== null && directives !== void 0 ? directives : {},
        },
        session_state: session_state
            ? {
                value: session_state,
            }
            : undefined,
        user_state_update: user_state_update
            ? {
                value: user_state_update,
            }
            : undefined,
        application_state: application_state
            ? {
                value: application_state,
            }
            : undefined,
        analytics,
        version: version !== null && version !== void 0 ? version : '1.0',
    };
};
