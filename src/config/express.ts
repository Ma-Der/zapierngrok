import express, { Express } from 'express';
import { ZapierController } from '../controller/zapier';
import { WebhookController } from '../controller/webhook';
import path from 'path';
import { port } from './envVar';

export const initializeServer = (): Express => {
    const app = express();

    app.use(express.urlencoded({ extended: true }));

    app.set("view engine", "ejs");
    app.set("views", path.join(__dirname, "../views"));
    
    app.get("/", (req, res) => res.render("index"))
    app.post("/send", ZapierController.sendToZapier);
    app.post("/getData", WebhookController.logData);

    startServer(app);
    return app;
}

const startServer = (app: Express) => {
    app.listen(port, () => {
        console.log(`Working on port: ${port}`);
    });
}