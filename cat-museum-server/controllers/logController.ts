import {Router} from 'express';
import * as logRepository from '../db/repositories/logRepository';
import {logger} from '../logger';
import {auth} from '../auth';

const router = Router();

router.get('/', auth, async (req, res) => {
    try {
        const logs = await logRepository.find(req.query);
        res.json(logs);
    } catch (e) {
        if (e.name == 'ValidationError' || e.name === 'TypeError')
            return res.status(400).send({error: e.message});
        logger.error(e.stack);
        res.status(500).send({error: 'Server error'});
    }
});

router.delete('/:id', auth, async (req, res) => {
    try {
        const {id} = req.params;
        const deleted = await logRepository.removeById(id);
        res.json(deleted);
    } catch (e) {
        if (e.name == 'ValidationError' || e.name === 'TypeError')
            return res.status(400).send({error: e.message});
        logger.error(e.stack);
        res.status(500).send({error: 'Server error'});
    }
});

export default router;