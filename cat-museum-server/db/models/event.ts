import {model, Schema} from 'mongoose';
import {eventStatus, eventType} from '../../types';

const event = new Schema({
    photoId: {
        type: Schema.Types.ObjectId,
        required: true,
    },
    header: {
        type: String,
        required: true,
    },
    type: {
        type: eventType,
        required: true,
    },
    status: {
        type: eventStatus,
        required: true,
    },
    shortDescription: {
        type: String,
        required: true,
    },
    fullDescription: {
        type: String,
        required: true,
    },
    from: {
        type: Date,
        required: true,
    },
    to: {
        type: Date,
        required: true,
    }
});

export default model('Event', event);