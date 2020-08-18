import {GridFSBucket, MongoClient} from 'mongodb';
import {Types} from 'mongoose';
import {fileDb, mongoOption} from '../../options';
import stream from 'stream';
import {Response} from 'express';

export async function create({buffer, originalName, contentType}:
                                 { buffer: Buffer, originalName: string, contentType: string }) {
    const fileId = Types.ObjectId();
    await MongoClient.connect(process.env.MONGODB_URI as string, mongoOption)
        .then(client => {
            const db = client.db(process.env.MONGODB_DB_NAME);
            const bucket = new GridFSBucket(db, {bucketName: fileDb.bucketName});
            const bufferStream = new stream.PassThrough();
            bufferStream.end(buffer);
            const uploadStream = bucket.openUploadStreamWithId(fileId, originalName, {contentType});
            bufferStream.pipe(uploadStream);
            return new Promise((resolve) => bufferStream.on('finish', resolve));
        });
    return fileId;
}

export async function findFile(fileId: string, res: Response) {
    return await MongoClient.connect(process.env.MONGODB_URI as string, mongoOption)
        .then(client => {
            const db = client.db(process.env.MONGODB_DB_NAME);
            const bucket = new GridFSBucket(db, {bucketName: fileDb.bucketName});
            return bucket
                .find({_id: Types.ObjectId(fileId)})
                .toArray()
                .then(([fileInfo]) => {
                    const downloadStream = bucket.openDownloadStreamByName(fileInfo.filename);
                    res.set('Content-Type', fileInfo.contentType);
                    downloadStream.pipe(res);
                });
        });
}

export async function removeById(photoId: string) {
    return await MongoClient.connect(process.env.MONGODB_URI as string, mongoOption)
        .then(client => {
            const db = client.db(process.env.MONGODB_DB_NAME);
            const bucket = new GridFSBucket(db, {bucketName: fileDb.bucketName});
            return bucket.delete(Types.ObjectId(photoId));
        });
}