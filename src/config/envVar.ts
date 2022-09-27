import dotenv from 'dotenv';
dotenv.config();

export const port = process.env.PORT as string;
export const zapierWebhookUrl = process.env.ZAPIER_WEBHOOK_URL as string;