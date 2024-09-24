import type {
    IAnalytics,
    ISkillResponse,
    ISkillResponseObj,
    IValue,
} from './models.js'

export interface IRawResponse {
    text: string
    tts?: string
    directives?: object
    end_session?: boolean
}

export interface IResponseBuilder extends ISkillResponse {
    withAudio: (data: {
        skillId: string
        resourceId: string
    }) => IResponseBuilder
    withAnalytics: (
        analytics: NonNullable<ISkillResponse['analytics']>
    ) => IResponseBuilder
    withDirectives: (
        directives: NonNullable<ISkillResponse['response']['directives']>
    ) => IResponseBuilder
    withSessionState: (sessionStateValue: IValue['value']) => IResponseBuilder
    withUserState: (userStateValue: IValue['value']) => IResponseBuilder
    withAppState: (appStateValue: IValue['value']) => IResponseBuilder
    build: () => ISkillResponse
}
export class ResponseBuilder implements IResponseBuilder {
    response: ISkillResponseObj
    session_state?: IValue | undefined
    analytics?: IAnalytics | undefined
    application_state?: IValue | undefined
    user_state_update?: IValue | undefined
    version = '1.0'

    constructor(rawResponse: IRawResponse) {
        this.response = {
            text: rawResponse.text,
            tts: rawResponse.tts ?? rawResponse.text,
            end_session: rawResponse.end_session ?? true,
            directives: rawResponse.directives ?? {},
        }
    }

    withAudio({
        skillId,
        resourceId,
    }: {
        skillId: string
        resourceId: string
    }) {
        this.response.tts = `<speaker audio="dialogs-upload/${skillId}/${resourceId}.opus">`
        return this
    }

    withAnalytics(analytics: NonNullable<ISkillResponse['analytics']>) {
        this.analytics = analytics
        return this
    }

    withDirectives(
        directives: NonNullable<ISkillResponse['response']['directives']>
    ) {
        this.response.directives = directives
        return this
    }

    withSessionState(sessionStateValue: IValue['value']) {
        this.session_state = { value: sessionStateValue }
        return this
    }

    withUserState(userStateValue: IValue['value']) {
        this.user_state_update = { value: userStateValue }
        return this
    }

    withAppState(appStateValue: IValue['value']) {
        this.application_state = { value: appStateValue }
        return this
    }

    build(): ISkillResponse {
        return {
            response: this.response,
            version: this.version,
            analytics: this.analytics,
            application_state: this.application_state,
            session_state: this.session_state,
            user_state_update: this.user_state_update,
        }
    }
}
