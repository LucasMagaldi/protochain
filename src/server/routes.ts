import { Router } from "express";
import Blockchain from "../lib/Blockchain";

const blockchain = new Blockchain();

class Routes {
    routes

    constructor() {
        this.routes = Router();
        this.appRoutes();
    }

    appRoutes(): void {
        this.routes.get("/status", (request, response) => {
            return response.status(200).json({
                numberOfBlocks: blockchain.blocks.length,
                isValid: blockchain.isValid(),
                lastBlock :blockchain.getLastBlock()
            });
        });

        this.routes.get("/blocks/:indexOrHash", (request, response, next) => {
            if(/^[0-9]+$/.test(request.params.indexOrHash))
                return response.json(blockchain.blocks[parseInt(request.params.indexOrHash)]);
            else
                return response.json(blockchain.getBlockByHash(request.params.indexOrHash));
        })
    }
}

export default new Routes().routes;