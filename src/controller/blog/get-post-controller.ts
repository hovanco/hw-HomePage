import { Request, Response } from 'express';
import { getPostService, getPostsService } from '../../services';

const PER_PAGE_RECENT = 2;

export async function getPostController(req: any, res: Response) {
    const { user } = req;
    const { slug } = req.params;

    try {
        const post = await getPostService(slug);
        const tag = post.tags.nodes.map((item: any) => item.slug).join(', ');
        const recentPosts = await getPostsService({
            perPage: PER_PAGE_RECENT,
            tag,
        });

        return res.render('pages/news-detail', { post, recentPosts, user });
    } catch (error) {
        return res.render('pages/news-detail', { post: undefined, recentPosts: [], user });
    }
}
