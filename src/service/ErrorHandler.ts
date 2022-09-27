import { Response } from 'express';

export class ErrorHandler {
    public static errorEmit(error: Error, res: Response) {
        const errorMessage = error.message;
        return res.status(400).json(errorMessage);
    }
}