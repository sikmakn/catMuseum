import express, {NextFunction, Request, Response} from 'express';
import cors from 'cors';
import compression from 'compression';
import bodyParser from 'body-parser';
import helmet from 'helmet';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import controller from './controllers';
import {mongooseOption} from './options';
import {ResponseError} from './types';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import {logger} from './logger';

async function start() {
    dotenv.config();

    await mongoose.connect(process.env.MONGODB_URI as string, mongooseOption);

    const app = express();

    app.use(cors());
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(cookieParser());
    app.use(session({secret: process.env.SECRET as string, resave: false, saveUninitialized: false}));
    app.use(compression());
    app.use(helmet());

    controller(app);

    app.post('/login', async (req, res) => {
        const {username, password} = req.body;
        if ((username === process.env.ADMIN_USERNAME) && (password === process.env.ADMIN_PASSWORD)) {
            req.session!.authorized = true;
            req.session!.username = req.body.username;
            return res.send();
        }
        res.status(401).send({error: 'Username or password is incorrect'});
    });

    app.get('/logout', async (req, res) => {
        delete req.session!.authorized;
        delete req.session!.username;
        res.status(200);
    });

    app.use((req, res) => {
        res.status(404).send({error: 'Page not found'});
    });

    app.use((err: ResponseError, req: Request, res: Response, next: NextFunction) => {
        logger.error(err.stack);
        if (err.name == 'ValidationError' || err.name === 'TypeError')
            return res.status(400).send({error: err.message});
        res.status(err.status || 500).send({error: err.message});
    });

    app.listen(process.env.PORT);
}

start();