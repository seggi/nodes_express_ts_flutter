import express, { Application } from "express";
import cors from "cors";
import * as bodyParser from "body-parser";


import userRouter from "./routes/user.route";
import adminRouter from "./routes/admin.route";
import { tokenGuard } from "./middlewares/token-guard";
// Routes

const app = express();
const port = 3000;

export class App {
    private app: Application;

    constructor(private port?: number | string) {
        this.app = express();
        this.settings()
        this.authRoute()
        this.publicRoute()
    }

    settings() {
        this.app.set('port', this.port || process.env.PORT || 3000);
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: true }))
        this.app.use(cors())
    }

    // Unprotected 
    authRoute() {
        this.app.use('/api', userRouter)
    }

    // Protected 
    publicRoute() {
        this.app.use(tokenGuard())
        this.app.use('/api/nk', adminRouter)
    }

    async listen() {
        this.app.listen(this.app.get('port'));
        console.log('server started on port', this.app.get('port'))
    }
}