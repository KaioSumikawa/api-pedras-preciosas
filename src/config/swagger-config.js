const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API de Pedras Preciosas",
      description: "API para catálogo de pedras preciosas",
      version: "1.0.0",
      contact: {
        name: "Felipe",
      },
    },
    servers: [
      {
        url: "http://localhost:4000",
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
    },
  },
  apis: ["./routes/*.js", "./docs/swaggerDocs.yaml"],
};

export default swaggerOptions;