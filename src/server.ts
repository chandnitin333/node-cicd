
import bodyParser = require("body-parser");
import * as express from 'express';
import cors  = require('cors');
// const { spawn } = require('child_process');

/**
 * ICAD Technology
 * @author Nitin Chandekar
 * @date 22 Jan 2023
 * Use for Configuration application
 */
export class Server{
    public  app:  express.Application = express();
    constructor(){

    }

    configBodyParser(){
        this.app.use(bodyParser.urlencoded({extended:true}));
        this.app.use(bodyParser.json());
        this.app.use(cors);
    }
}
