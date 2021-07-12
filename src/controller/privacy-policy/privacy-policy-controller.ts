import { Request, Response } from 'express';

export function privacyPolicyController(req: any, res: Response) {
    const { user } = req;

    return res.render('pages/privacy-policy', { user });
}
