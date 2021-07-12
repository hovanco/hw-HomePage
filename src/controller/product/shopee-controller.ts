import { Request, Response } from 'express';
import { ETypeQuestion, getQuestionsService } from '../../services';

export function shopeeController(req: any, res: Response) {
    const { user } = req;
    const questions = getQuestionsService(ETypeQuestion.Shopee);

    return res.render('pages/ecom', { questions, user });
}
