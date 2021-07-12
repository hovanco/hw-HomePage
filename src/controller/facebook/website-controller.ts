import { Request, Response } from 'express';
import { ETypeQuestion, getQuestionsService } from '../../services';

export function websiteController(req: Request, res: Response) {
    const questions = getQuestionsService(ETypeQuestion.Website);

    return res.render('pages/web', { questions });
}
