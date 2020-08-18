import {Router} from 'express';
import * as photoRepository from '../db/repositories/photoRepository';
import {logger} from '../logger';

const router = Router();

router.get('/:fileId', async (req, res) => {
    try {
        const {fileId} = req.params;
        await photoRepository.findFile(fileId, res);
    } catch (e) {
        if (e.name == 'ValidationError' || e.name === 'TypeError')
            return res.status(400).send({error: e.message});
        logger.error(e.stack);
        res.status(500).send({error: 'Server error'})
    }
});

export default router;