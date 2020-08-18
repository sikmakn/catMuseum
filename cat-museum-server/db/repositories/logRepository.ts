import log from '../models/log';
import {FilterQuery} from 'mongoose';

export async function find(findParams: FilterQuery<Document>) {
    return (await log.find(findParams)).map(d => d.toObject());
}

export async function removeById(_id: string) {
    return (await log.findByIdAndDelete(_id))?.toObject();
}

export async function removeMany(findParams: FilterQuery<Document>) {
    return await log.deleteMany(findParams);
}