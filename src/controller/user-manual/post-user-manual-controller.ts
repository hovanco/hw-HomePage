import { Response } from 'express';
import { getPostService } from '../../services';

export async function getPostUserManualController(req: any, res: Response) {
    const { user } = req;
    const { slug } = req.params;

    try {
        const post = await getPostService(slug);
        const tag = post.tags.nodes.map((item: any) => item.slug).join(', ');

        return res.render('pages/user-manual-detail', { post, user });
    } catch (error) {
        return res.render('pages/user-manual-detail', {
            post: undefined,
            user,
        });
    }
}
