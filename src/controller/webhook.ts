import { Request, Response } from 'express';

export class WebhookController {
    public static logData(req: Request, res: Response) {
        const data = req.body;
        return res.status(200).json({
            msg: "data recevied",
            data
        })
    }
}