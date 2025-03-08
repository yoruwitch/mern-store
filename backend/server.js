import express from "express";
import dotenv from "dotenv";
import path from "path";
import productRoutes from "./routes/product.route.js";
import swaggerUi from "swagger-ui-express";
import swaggerJSDoc from "swagger-jsdoc";
import { connectDb } from "./config/db.js";
import { fileURLToPath } from "url";

dotenv.config();

// config to make Swagger  understand where the routes file to work
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(express.json()); // this middleware allow us to accept JSON data in the req.body
app.use("/api/products", productRoutes);

// Swagger definition
const swaggerOptions = {
    swaggerDefinition: {
        openapi: "3.0.0",
        info: {
            title: "TechLead Store API",
            version: "1.0.0",
            description: "API documentation using Swagger",
        },
        servers: [
            {
                url: `http://localhost:${process.env.PORT}`,
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
    apis: [path.join(__dirname, "routes/product.route.js")], // Path to your API docs
};

const swaggerDocs = swaggerJSDoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.listen(process.env.PORT, () => {
    connectDb();
    console.log("Started in localhost:5000");
});
