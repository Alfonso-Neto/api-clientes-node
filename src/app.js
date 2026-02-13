const express = require("express");
const swaggerUi = require("swagger-ui-express");
const swaggerJsdoc = require("swagger-jsdoc");

const app = express();

app.use(express.json());

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API de clientes",
      version: "1.0.0",
      description: "API teste feita com Node.js, Express e Prisma",
    },
  },
  apis: ["./src/routes/*.js"],
};

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));

app.get("/", (req, res) => {
  res.send("API funcionando!");
});

module.exports = app;
