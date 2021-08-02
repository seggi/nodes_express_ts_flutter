import express, { Application } from "express";
import * as cors from "cors";
import * as bodyParser from "body-parser";



import UserRoutes  from "./routes/user.route";



// Routes

const app = express();
const port = 3000;


export class App {
    private app: Application;

    constructor(private port?: number | string) {
        this.app = express();
        this.settings()
    }

    settings() {
        this.app.set('port', this.port || process.env.PORT || 3000);
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded())
    }

    route() {
        this.app.use('/api', UserRoutes)
    }

    async listen() {
        this.app.listen(this.app.get('port'));
        console.log('server started on port', this.app.get('port'))
    }
}