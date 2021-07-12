import { Request, Response } from 'express';
import { ETypeQuestion, getQuestionsService } from '../../services';

export function websiteController(req: any, res: Response) {
    const { user } = req;
    const questions = getQuestionsService(ETypeQuestion.Website);

    return res.render('pages/web', { questions, user });
}
