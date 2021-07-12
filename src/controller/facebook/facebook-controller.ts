import { Request, Response } from 'express';
import { ETypeQuestion, getQuestionsService } from '../../services';

export function facebookController(req: Request, res: Response) {
    const questions = getQuestionsService(ETypeQuestion.Facebook);

    return res.render('pages/social', { questions });
}
