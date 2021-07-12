import { Request, Response } from 'express';
import { getPostsService, getProductsService, getProcessService } from '../../services';

export async function introduceController(req: any, res: Response) {
    try {
        const products = getProductsService();
        const processes = getProcessService();
        return res.render('pages/introduce', {
            processes,
            products,
            user: req.user,
        });
    } catch (error) {
        return res.render('pages/introduce');
    }
}
