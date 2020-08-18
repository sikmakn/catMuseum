import mongoose, {Schema} from 'mongoose';

const albumPhoto = new mongoose.Schema({
    photoId: {
        type: Schema.Types.ObjectId,
        required: true,
    },
});

export default mongoose.model('AlbumPhoto', albumPhoto);