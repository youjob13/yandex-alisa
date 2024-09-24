import { IDBClient } from '@myalisa/core'
import { MongoClient } from 'mongodb'
import { inject, singleton } from 'tsyringe'
import { CONNECTION_OPTIONS } from './injection-tokens.js'
import { IConnectionOptions } from './models.js'

@singleton<IDBClient<MongoClient>>()
export class MongoDBClient implements IDBClient<MongoClient> {
    private readonly client: MongoClient

    constructor(@inject(CONNECTION_OPTIONS) options: IConnectionOptions) {
        const { uri, options: otherOptions } = options
        this.client = new MongoClient(uri, otherOptions)
    }

    connect(): Promise<MongoClient> {
        return this.client.connect()
    }
}
