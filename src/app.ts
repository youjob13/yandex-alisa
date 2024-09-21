import Fastify from 'fastify'

import initRoutes from './routes.js'

const fastify = Fastify({
    logger: {
        level: process.env.LOG_LEVEL || 'info',
    },
})

interface IAppConfig {
    port: number
    host: string
}
interface IApp {
    run: () => Promise<void>
}
export class App implements IApp {
    constructor(private readonly config: IAppConfig) {}

    async run() {
        try {
            this.initRoutes()

            await fastify.listen({
                port: this.config.port,
                host: this.config.host,
            })
        } catch (err) {
            fastify.log.error(err)
            process.exit(1)
        }
    }

    private initRoutes() {
        initRoutes(fastify)
    }
}
