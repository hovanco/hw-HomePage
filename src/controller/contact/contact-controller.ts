import { Response } from 'express';

export function contactController(req: any, res: Response) {
    const { user } = req;
    return res.render('pages/contact', { user });
}
