import { container } from 'tsyringe'
import { IConnectionOptions } from './models.js'

export const CONNECTION_OPTIONS = Symbol('mongodb.options')
export const registerMongoDB = (options: IConnectionOptions) => {
    container.register<IConnectionOptions>(CONNECTION_OPTIONS, {
        useValue: options,
    })
}
