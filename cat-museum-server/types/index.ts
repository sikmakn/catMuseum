import {Types} from 'mongoose';

export enum eventStatus {
    now = 'now',
    future = 'future'
}

export enum eventType {
    exhibition = 'exhibition',
    competition = 'competition'
}

export interface PhotoFile {
    photoName: string,
    mimeType: string,
    originalName: string
}

export interface PhotoModel {
    photoId: Types.ObjectId,
}

export interface Event {
    photoId: Types.ObjectId,
    header: string,
    type: eventType,
    status: eventStatus,
    shortDescription: string,
    fullDescription: string,
    from: Date,
    to: Date
}

export interface ResponseError extends Error{
    status?: number
}