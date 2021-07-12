import { Request, Response } from 'express';

export function teamOfUseController(req: any, res: Response) {
    const { user } = req;

    return res.render('pages/team-of-use', { user });
}
