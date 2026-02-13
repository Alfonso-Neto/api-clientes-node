const express = require("express");
const swaggerUi = require("swagger-ui-express");
const swaggerJsdoc = require("swagger-jsdoc");

const clientesRoutes = require("./routes/clientes");

const app = express();

app.use(express.json());

const swaggerSpec = swaggerJsdoc({
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API de clientes",
      version: "1.0.0",
      description: "API teste feita com Node.js, Express e Prisma",
    },

    servers: [
      {
        url: "http://localhost:5000",
      },
    ],

    components: {
      schemas: {
        ClienteInput: {
          type: "object",
          required: ["name", "lastname", "address", "birthDate", "gender"],
          properties: {
            name: { type: "string", example: "João" },
            lastname: { type: "string", example: "Silva" },
            address: { type: "string", example: "Blumenau" },
            birthDate: {
              type: "string",
              format: "date-time",
              example: "2000-01-01T00:00:00.000Z",
            },
            gender: { type: "string", example: "Masculino" },
          },
        },
      },
    },
  },
  apis: ["./src/routes/*.js"],
});

app.use("/api-clientes-node", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use("/clientes", clientesRoutes);

app.get("/", (req, res) => {
  res.send("API funcionando!");
});

module.exports = app;
