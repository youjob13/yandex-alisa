import Fastify from 'fastify'

const fastify = Fastify({
    logger: true,
})

interface IAppConfig {
    port: number
}
interface IApp {
    run: () => Promise<void>
}
export class App implements IApp {
    constructor(private readonly config: IAppConfig) {}

    async run() {
        fastify.get('/', async function handler() {
            return { hello: 'world' }
        })

        try {
            await fastify.listen({ port: this.config.port })
        } catch (err) {
            fastify.log.error(err)
            process.exit(1)
        }
    }
}
