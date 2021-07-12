import { Response } from 'express';
import { getPostsService, getProductsService } from '../../services';

export async function errorPackageController(req: any, res: Response) {
    return res.render('pages/error-package', {
        user: req.user,
    });
}
