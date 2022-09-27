import { Request, Response } from 'express';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import { zapierWebhookUrl } from '../config/envVar';
import { ErrorHandler } from '../service/ErrorHandler';

export class ZapierController {
    public static async sendToZapier(req: Request, res: Response) {
        try {
            const data = {
                Id: uuidv4(),
                Name: req.body.name || 'empty name',
                Surname: req.body.surname || 'empty surname',
                Email: req.body.email || 'empty email',
            }
    
            const msg = await axios.post(zapierWebhookUrl, data);
    
            return res.status(200).json(msg.data);
        }
        catch(err: any) {
            const error = err as Error;
            return ErrorHandler.errorEmit(error, res);
        }
    }
}