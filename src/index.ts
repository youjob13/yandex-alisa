import * as Config from '@myalisa/config'

import { App } from './app.js'

const app = new App({
    port: Config.PORT,
    host: Config.HOST,
})
app.run()
