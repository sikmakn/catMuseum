import event from '../models/event';
import {FilterQuery} from 'mongoose';
import {Event} from '../../types';

export async function create(newEvent: Event) {
    const eventForSave = new event(newEvent);
    return eventForSave.save();
}

export async function findById(_id: string) {
    return (await event.findById(_id))?.toObject();
}

export async function find(findParams: FilterQuery<Document>) {
    return (await event.find(findParams)).map(d => d.toObject());
}

export async function remove(_id: string) {
    return await event.findByIdAndDelete(_id);
}