"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
const bodyParser = require("body-parser");
const express = require("express");
const cors = require("cors");
const { spawn } = require('child_process');
/**
 * ICAD Technology
 * @author Nitin Chandekar
 * @date 22 Jan 2023
 * Use for Configuration application
 */
class Server {
    constructor() {
        this.app = express();
    }
    configBodyParser() {
        this.app.use(bodyParser.urlencoded({ extended: true }));
        this.app.use(bodyParser.json());
        this.app.use(cors);
    }
}
exports.Server = Server;
