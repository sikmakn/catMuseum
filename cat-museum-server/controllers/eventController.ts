import * as eventRepository from '../db/repositories/eventRepository';
import {Router} from 'express';
import {eventStatus, eventType} from '../types';
import multer from 'multer';
import * as photoRepository from '../db/repositories/photoRepository';
import {auth} from '../auth';
import {logger} from '../logger';

const storage = multer.memoryStorage();
const upload = multer({storage});

const router = Router();

router.post('/', auth, upload.single('photo'),
    async (req, res) => {
        try {
            const {header, status, type, fullDescription, shortDescription, from, to} = req.body;
            const {mimetype: contentType, originalname: originalName, buffer} = req.file;
            const photoId = await photoRepository.create({originalName, contentType, buffer});
            if (!Object.values(eventType).includes(type))
                return res.status(400).send({error: 'Validation error: type is not valid'});

            if (!Object.values(eventType).includes(type))
                return res.status(400).send({error: 'Validation error: status is not valid'});

            const newEvent = await eventRepository.create({
                header,
                photoId,
                type: type as eventType,
                status: status as eventStatus,
                fullDescription, shortDescription,
                from: new Date(from),
                to: new Date(to),
            });
            res.json(newEvent);
        } catch (e) {
            if (e.name == 'ValidationError' || e.name === 'TypeError')
                return res.status(400).send({error: e.message});
            logger.error(e.stack);
            res.status(500).send({error: 'Server error'})
        }
    });

router.get('/all', async (req, res) => {
    try {
        const allEvents = await eventRepository.find({});
        res.json(allEvents);
    } catch (e) {
        logger.error(e.stack);
        res.status(500).send({error: 'Server error'})
    }
});

router.get('/', async (req, res) => {
    try {
        const events = await eventRepository.find(req.query);
        res.json(events);
    } catch (e) {
        if (e.name == 'ValidationError' || e.name === 'TypeError')
            return res.status(400).send({error: e.message});
        logger.error(e.stack);
        res.status(500).send({error: 'Server error'})
    }
});

router.delete('/:id', auth, async (req, res) => {
    try {
        const {id} = req.params;
        const {photoId} = await eventRepository.findById(id);
        await photoRepository.removeById(photoId);
        const deleted = await eventRepository.remove(id);
        res.json(deleted);
    } catch (e) {
        if (e.name == 'ValidationError' || e.name === 'TypeError')
            return res.status(400).send({error: e.message});
        logger.error(e.stack);
        res.status(500).send({error: 'Server error'})
    }
});

export default router;