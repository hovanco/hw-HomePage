import { Response } from 'express';
import { getPostsService, getProductsService } from '../../services';

export async function homeController(req: any, res: Response) {
    try {
        const products = getProductsService();
        const posts = await getPostsService({
            perPage: 3,
        });

        return res.render('pages/home', {
            products,
            posts,
            user: req.user,
        });
    } catch (error) {
        return res.render('pages/home');
    }
}
