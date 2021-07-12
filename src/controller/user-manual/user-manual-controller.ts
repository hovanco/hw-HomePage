import { Request, Response } from 'express';
import { getPostsService } from '../../services';

export async function getPostsUserManualController(req: any, res: Response) {
    try {
        const { user } = req;
        const { page } = req.query;

        const posts = await getPostsService({
            categoryId: 233,
            pageNumber: Number(page) > 0 ? Number(page) - 1 : 0,
        });

        return res.render('pages/user-manual', { posts, user });
    } catch (error) {
        return res.render('pages/user-manual', { user: undefined, posts: [] });
    }
}
