import {Router} from 'express';
import * as bestPhotoRepository from '../db/repositories/bestPhotoRepository';
import multer from 'multer';
import * as photoRepository from '../db/repositories/photoRepository';
import {auth} from '../auth';
import {logger} from "../logger";

const storage = multer.memoryStorage();
const upload = multer({storage});

const router = Router();

router.post('/', auth, upload.single('photo'), async (req, res) => {
    try {
        const {mimetype: contentType, originalname: originalName, buffer} = req.file;
        const photoId = await photoRepository.create({originalName, contentType, buffer});
        const newAlbumPhoto = await bestPhotoRepository.create({photoId});
        res.json(newAlbumPhoto);
    } catch (e) {
        if (e.name == 'ValidationError')
            return res.status(400).send({error: e.message});
        logger.error(e.stack);
        res.status(500).send({error: 'Server error'})
    }
});

router.get('/all', async (req, res) => {
    try {
        const albumPhotos = await bestPhotoRepository.getAll();
        res.json(albumPhotos);
    } catch (e) {
        logger.error(e.stack);
        res.status(500).send({error: 'Server error'})
    }
});

router.delete('/:id', auth, async (req, res) => {
    try {
        const {id} = req.params;
        const {photoId} = await bestPhotoRepository.findById(id);
        await photoRepository.removeById(photoId);
        const deleted = await bestPhotoRepository.removeById(id);
        res.json(deleted);
    } catch (e) {
        if (e.name == 'ValidationError')
            return res.status(400).send({error: e.message});
        logger.error(e.stack);
        res.status(500).send({error: 'Server error'})
    }
});

export default router