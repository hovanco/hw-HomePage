import { Request, Response } from 'express';
import { ETypeQuestion, getQuestionsService } from '../../services';

export function shopeeController(req: Request, res: Response) {
    const questions = getQuestionsService(ETypeQuestion.Shopee);

    return res.render('pages/ecom', { questions });
}
