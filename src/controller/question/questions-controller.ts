import { Response } from 'express';
import { ETypeQuestion, getQuestionsService } from '../../services';

export function questionsController(req: any, res: Response) {
    const { user } = req;
    const questions = getQuestionsService(ETypeQuestion.All);

    return res.render('pages/questions', {
        questions,
        user,
    });
}
