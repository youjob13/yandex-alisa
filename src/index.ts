import * as Config from '@myalisa/config'

import { App } from './app.js'

const app = new App({
    port: Config.PORT,
})
app.run()
