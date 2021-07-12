import { INSA_BLOG_API } from '../../constants';
import { axiosClient } from '../axios';

export async function getPostService(slug: string) {
    const id = `"${slug}"`;

    try {
        const response = await axiosClient({
            method: 'POST',
            url: INSA_BLOG_API,
            headers: { 'Content-Type': 'application/json' },
            data: JSON.stringify({
                query: `
                    query {
                        post(idType: SLUG, id: ${id}) {
                            slug
                            title
                            content
                            date
                            dateGmt
                            featuredImage {
                              node {
                                srcSet
                                sourceUrl
                              }
                            }
                            excerpt(format: RENDERED)
                            uri
                            tags {
                                nodes {
                                    slug
                                    tagId
                                    uri
                                }
                            }
                        }
                    }
                `,
            }),
        });

        return response.data.post;
    } catch (error) {
        console.log('err', error);
        return {};
    }
}
