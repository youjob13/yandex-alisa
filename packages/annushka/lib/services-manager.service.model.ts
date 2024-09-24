import type { IRequestBody, ISkillResponse } from '@myalisa/ya-dialogs'

export interface IServicesManagerService {
    start: (request: IRequestBody) => ISkillResponse
}
