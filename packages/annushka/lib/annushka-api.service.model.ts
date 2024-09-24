import type { IRequestBody, ISkillResponse } from '@myalisa/ya-dialogs'

export interface IAnnushkaApiService {
    getAppointmentList(request: IRequestBody): ISkillResponse
    getNewRequests(): ISkillResponse
    cancelAppointment(): ISkillResponse
}
