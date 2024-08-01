const swaggerJsdoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Mi API',
      version: '1.0.0',
      description: 'Documentación de Mi API con Swagger',
    },
    servers: [
      {
        url: 'http://localhost:3999',
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        }
      }
    },
  },
  apis: ['./src/api-docs.yaml'], // Incluye el archivo YAML aquí
};

const swaggerSpec = swaggerJsdoc(options);

module.exports = swaggerSpec;