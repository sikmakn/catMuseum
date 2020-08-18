import bestPhoto from '../models/bestPhoto';
import {PhotoModel} from '../../types';

export async function create(bestPhotoParams: PhotoModel) {
    const newBestPhoto = new bestPhoto(bestPhotoParams);
    return newBestPhoto.save();
}

export async function findById(_id: string) {
    return (await bestPhoto.findById(_id))?.toObject();
}

export async function getAll() {
    return (await bestPhoto.find({})).map(d => d.toObject());
}

export async function removeById(_id: string) {
    return await bestPhoto.findByIdAndDelete(_id);
}