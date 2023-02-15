import * as express from 'express';
/**
 * ICAD Technology
 * @author Nitin Chandekar
 * @date 22 Jan 2023
 * Use for Configuration application
 */
export declare class Server {
    app: express.Application;
    constructor();
    configBodyParser(): void;
}
