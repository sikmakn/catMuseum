import mongoose, {Schema} from 'mongoose';

const bestPhoto = new mongoose.Schema({
    photoId: {
        type: Schema.Types.ObjectId,
        required: true,
    },
});

export default mongoose.model('BestPhoto', bestPhoto);