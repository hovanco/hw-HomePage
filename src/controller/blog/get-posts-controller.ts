import { Request, Response } from 'express';
import { getPostsService, getPostService } from '../../services';

export async function getPostsController(req: any, res: Response) {
    try {
        const { user } = req;
        const { page } = req.query;
        const postPick = await getPostService(
            '3-nguyen-tac-giup-ban-quan-ly-don-hang-online-hieu-qua',
        );
        const posts = await getPostsService({
            pageNumber: Number(page) > 0 ? Number(page) - 1 : 0,
        });

        return res.render('pages/news', { posts, postPick, user });
    } catch (error) {
        return res.render('pages/news', { user: undefined, posts: [], postPick: undefined });
    }
}
