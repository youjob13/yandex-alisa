import 'reflect-metadata'
import * as Config from '@myalisa/config'
import { registerMongoDB } from '@myalisa/mongodb'

registerMongoDB({
    uri: Config.DB.URI,
    options: {},
})

const { App } = await import('./app.js')

const app = new App({
    port: Config.PORT,
    host: Config.HOST,
})
app.run()
