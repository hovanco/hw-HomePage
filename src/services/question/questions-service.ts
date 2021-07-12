import { facebookQuestions, shopeeQuestions, websiteQuestions, posQuestions } from './constants';

export enum ETypeQuestion {
    All = 'all',
    Facebook = 'facebook',
    Pos = 'pos',
    Shopee = 'shopee',
    Website = 'website',
}

export function getQuestionsService(type: ETypeQuestion) {
    if (type === ETypeQuestion.All) {
        return {
            facebookQuestions,
            shopeeQuestions,
            websiteQuestions,
            posQuestions,
        };
    }

    if (type === ETypeQuestion.Facebook) {
        return facebookQuestions;
    }

    if (type === ETypeQuestion.Pos) {
        return posQuestions;
    }

    if (type === ETypeQuestion.Website) {
        return websiteQuestions;
    }
    if (type === ETypeQuestion.Shopee) {
        return shopeeQuestions;
    }

    return [];
}
