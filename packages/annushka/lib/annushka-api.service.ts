import {
    ResponseBuilder,
    IRequestBody,
    ISkillResponse,
    formatArrayDataToText,
} from '@myalisa/ya-dialogs'
import type { IAnnushkaApiService } from './annushka-api.service.model.js'
import { inject, singleton } from 'tsyringe'
import { MongoDBClient } from '@myalisa/mongodb'
import { IDBClient } from '@myalisa/core'
import { MongoClient } from 'mongodb'

@singleton<IAnnushkaApiService>()
export class AnnushkaApiService implements IAnnushkaApiService {
    constructor(
        @inject(MongoDBClient) private readonly db: IDBClient<MongoClient>
    ) {
        this.db.connect()
    }

    getAppointmentList({ request }: IRequestBody): ISkillResponse {
        const appointmentList = [
            {
                id: '1',
                name: request.command,
                client: 'Ann',
                date: new Date(),
            },
            {
                id: '2',
                name: 'Наращивание',
                client: 'Fed',
                date: new Date(),
            },
        ]

        return new ResponseBuilder({
            text: formatArrayDataToText(
                appointmentList,
                ({ name, client, date }) =>
                    `${name} у ${client} в ${date.toDateString()}`
            ),
        })
    }

    cancelAppointment(): ISkillResponse {
        return new ResponseBuilder({ text: 'stub' })
    }

    getNewRequests(): ISkillResponse {
        return new ResponseBuilder({ text: 'stub' })
    }
}
