import { Request, Response } from 'express';
import { ETypeQuestion, getQuestionsService } from '../../services';

export function facebookController(req: any, res: Response) {
    const { user } = req;
    const questions = getQuestionsService(ETypeQuestion.Facebook);

    return res.render('pages/social', { questions, user });
}
