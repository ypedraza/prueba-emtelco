const express = require('express');
const apiRoutes = require('./controller/api.controller');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./swaggerOptions');
const logger = require('./util/log');


class Server {
    constructor(port) {
        this.app = express();
        this.port = port;
        this.initializeMiddlewares();
        this.setupRoutes();
        this.setupSwagger();
    }

    static init(port) {
        return new Server(port);
    }

    initializeMiddlewares() {
        this.app.use(express.json());
        this.app.use(logger);
    }

    setupSwagger() {
        this.app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
    }

    setupRoutes() {
        this.app.use(apiRoutes);
    }

    start() {
        this.app.get('/', (req, res) => {
            res.send('Servidor funcionando!');
        });

        this.app.get('/aws', (req, res) => { // Corregido a this.app
            res.send('Hola Mundo desde APIGW!');
        });

        this.app.listen(this.port, () => {
            console.log(`Servidor escuchando en el puerto ${this.port}`);
        });
    }
}


module.exports = Server;
