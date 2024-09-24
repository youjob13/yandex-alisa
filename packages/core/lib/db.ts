export interface IDBClient<TClient> {
    connect(): Promise<TClient>
}
