"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mongoOption = exports.mongooseOption = exports.fileDb = void 0;
exports.fileDb = {
    bucketName: 'photo',
    fileColl: 'photo.files',
};
exports.mongooseOption = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
};
exports.mongoOption = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};
