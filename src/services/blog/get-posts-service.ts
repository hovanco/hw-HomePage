import { INSA_BLOG_API } from '../../constants';
import { axiosClient } from '../axios';

interface IGetPostsService {
    pageNumber?: number;
    perPage?: number;
    tag?: string;
    categoryId?: number;
}

export async function getPostsService({
    pageNumber,
    perPage,
    tag = '',
    categoryId,
}: IGetPostsService) {
    try {
        const response = await axiosClient({
            method: 'POST',
            url: INSA_BLOG_API,
            data: JSON.stringify({
                query: `
                query {
                    posts(where: {tag: "${tag || ''}", categoryId:  ${
                    categoryId || null
                }, offsetPagination: {offset: ${pageNumber || 0}, size: ${perPage || 6}}}) {
                        nodes {
                          author {
                            node {
									avatar {
										url
									}
									name
                            	}
                          	}
                          	title(format: RENDERED)
							uri
							date
							id
							link
							status
							excerpt(format: RENDERED)
							isSticky
                            featuredImage {
                                node {
                                    sourceUrl
                                }
                            }
                        }
                        pageInfo {
                            offsetPagination {
                                hasMore
                                hasPrevious
                                total
                            }
                        }
                      }
                }
            `,
            }),
        });

        return {
            posts: response.data.posts.nodes,
            pagination: { ...response.data.posts.pageInfo, pageNumber: Number(pageNumber) + 1 },
        };
    } catch (error) {
        console.log('error', error);
        return {
            posts: [],
        };
    }
}
