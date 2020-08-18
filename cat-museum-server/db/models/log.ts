import {Schema, model} from 'mongoose';

const log = new Schema({
    timestamp:{
        type: Date,
    },
    message:{
        type:String
    },
});

export default model('Log', log);