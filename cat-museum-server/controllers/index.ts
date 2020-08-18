import albumPhotoController from './albumPhotoController';
import eventController from './eventController';
import bestPhotoController from './bestPhotoController';
import photoController from './photoController';
import {Express} from 'express';

export default function (app: Express) {
    app.use('/albumPhoto', albumPhotoController);
    app.use('/event', eventController);
    app.use('/bestPhoto', bestPhotoController);
    app.use('/photo', photoController);
}