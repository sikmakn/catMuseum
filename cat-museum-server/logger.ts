import winston from 'winston';
import {MongoDB} from 'winston-mongodb';
import dotenv from 'dotenv';

dotenv.config();

export const logger = winston.createLogger({
    transports: [
        new MongoDB({
            db: process.env.MONGODB_URI as string,
            collection: 'logs',
            options: {useUnifiedTopology: true},
        })
    ],
    format: winston.format.combine(winston.format.timestamp(), winston.format.json()),
});
