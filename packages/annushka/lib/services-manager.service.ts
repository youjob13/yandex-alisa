import type { IRequestBody } from '@myalisa/ya-dialogs'
import type { IServicesManagerService } from './services-manager.service.model.js'
import type { IAnnushkaApiService } from './annushka-api.service.model.js'
import { AnnushkaCommandFactory } from './factories.js'
import { inject, singleton } from 'tsyringe'
import { AnnushkaApiService } from './annushka-api.service.js'

@singleton<IServicesManagerService>()
export class ServicesManagerService implements IServicesManagerService {
    constructor(
        @inject(AnnushkaApiService)
        private readonly annushkaApiService?: IAnnushkaApiService
    ) {}

    start(request: IRequestBody) {
        const factory = new AnnushkaCommandFactory(this.annushkaApiService!)
        return factory.run(request)
    }
}
