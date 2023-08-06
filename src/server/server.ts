import express from "express";
import { App } from "./app";

const server = new App().server;

const PORT: string = process.env.PORT || "8080";



server.listen(PORT, () => {
    console.log(PORT)
});
