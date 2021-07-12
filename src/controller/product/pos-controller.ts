import { Request, Response } from 'express';
import { ETypeQuestion, getQuestionsService } from '../../services';

export function posController(req: any, res: Response) {
    const { user } = req;
    const questions = getQuestionsService(ETypeQuestion.Pos);

    return res.render('pages/pos', { questions, user });
}
