import express, { Express } from "express";
import cors from "cors";
import morgan from "morgan";
import routes from "./routes";


export class App {
    server: Express

    constructor() {
        this.server = express();
        this.server.use(morgan("tiny"));
        this.serverRoutes();
    }

    serverRoutes() {
        this.server.use(routes);
    }

}

//export new App().server;

