import {NextFunction, Request, Response} from 'express';

export const auth = (req: Request, res: Response, next: NextFunction) => {
    if(req.session!.authorized)return next();
    return res.status(401).send({error:'Unauthorized'});
};