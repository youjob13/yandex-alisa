import {
    type ICommandFactory,
    type IRequestBody,
    type ISkillResponse,
    ResponseBuilder,
} from '@myalisa/ya-dialogs'
import type { IAnnushkaApiService } from './annushka-api.service.model.js'

export class AnnushkaCommandFactory implements ICommandFactory {
    constructor(private readonly annushkaApiService: IAnnushkaApiService) {}

    run(request?: IRequestBody): ISkillResponse {
        if (!request) {
            return new ResponseBuilder({
                text: 'Bad request',
            })
        }

        switch (request.request.command) {
            case 'receive appointment list': {
                return this.annushkaApiService.getAppointmentList(request)
            }
            case 'cancel appointment': {
                return this.annushkaApiService.cancelAppointment()
            }
            case 'receive new requests': {
                return this.annushkaApiService.getNewRequests()
            }
            default: {
                return new ResponseBuilder({
                    text: 'Ops :(',
                })
            }
        }
    }
}
