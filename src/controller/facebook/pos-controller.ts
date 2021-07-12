import { Request, Response } from 'express';
import { ETypeQuestion, getQuestionsService } from '../../services';

export function posController(req: Request, res: Response) {
    const questions = getQuestionsService(ETypeQuestion.Pos);

    return res.render('pages/pos', { questions });
}
