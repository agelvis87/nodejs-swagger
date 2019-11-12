const express = require("express");
const swaggerUi = require("swagger-ui-express");
const swaggerJsdoc = require("swagger-jsdoc");

const app = express();

const options = {
  swaggerDefinition: {
    info: {
      title: "nodejs-swagger",
      version: "1.0.0",
      description: "Ejemplos de API Rest usando swagger"
    },
    host: "http://localhost:3000"
  },
  apis: [process.env.SERVER_DIR + "/routes/*.js"]
};

const specs = swaggerJsdoc(options);

let options_ui = {
  explorer: false
};

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs, options_ui));

module.exports = app;
