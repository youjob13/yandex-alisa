import Fastify from 'fastify';
import initRoutes from './routes.js';
const fastify = Fastify({
    logger: {
        level: process.env.LOG_LEVEL || 'info',
    },
});
export class App {
    constructor(config) {
        this.config = config;
    }
    async run() {
        try {
            this.initRoutes();
            await fastify.listen({
                port: this.config.port,
                host: this.config.host,
            });
        }
        catch (err) {
            fastify.log.error(err);
            process.exit(1);
        }
    }
    initRoutes() {
        initRoutes(fastify);
    }
}
