import { FastifyInstance } from 'fastify'
import type { IRequestBody } from '@myalisa/ya-dialogs'
import {
    ServicesManagerService,
    IServicesManagerService,
} from '@myalisa/annushka'
import { container } from 'tsyringe'

export const createRouter = (app: FastifyInstance) => {
    const servicesManagerService: IServicesManagerService = container.resolve(
        ServicesManagerService
    )

    app.post('/annushka/', async (request) => {
        try {
            const body = request.body as IRequestBody
            app.log.debug(body, '[INCOMING_REQUEST]')

            const result = await servicesManagerService.start(body)
            app.log.debug(result, '[ANNUSHKA/RESPONSE]')

            return result
        } catch (error) {
            app.log.error(error)
        }
    })
}
