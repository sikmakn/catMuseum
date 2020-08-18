import albumPhoto from '../models/albumPhoto';
import {PhotoModel} from '../../types';

export async function create(albumPhotoParams: PhotoModel) {
    const newAlbumPhoto = new albumPhoto(albumPhotoParams);
    return newAlbumPhoto.save();
}

export async function findById(_id: string) {
    return (await albumPhoto.findById(_id))?.toObject();
}

export async function getAll() {
    return (await albumPhoto.find({})).map(d => d.toObject());
}

export async function removeById(_id: string) {
    return await albumPhoto.findByIdAndDelete(_id);
}