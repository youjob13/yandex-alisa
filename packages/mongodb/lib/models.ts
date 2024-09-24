import { MongoClientOptions } from 'mongodb'

export interface IConnectionOptions {
    uri: string
    options: MongoClientOptions
}
