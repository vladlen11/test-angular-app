export class BlogModel  {
    user_name: string;
    user_avatar_image: any;
    category: any;
    views_count: number;
    comments_count: number;
    title: string;
    content: string;
    description: string;
    is_published: boolean;
    slug: string;
    thumbnail_image: any;
    translations: any;

    current_page: number;
    from: number;
    last_page: number;
    per_page: number;
    to: number;
    total: number;

    constructor(
        blogData: BlogModel
    ) {
        this.user_name = blogData.user_name;
        this.user_avatar_image = blogData.user_avatar_image;
        this.category = blogData.category;
        this.views_count = blogData.views_count;
        this.comments_count = blogData.comments_count;
        this.title = blogData.title;
        this.content = blogData.content;
        this.content = blogData.content;
        this.description = blogData.description;
        this.is_published = blogData.is_published;
        this.slug = blogData.slug;
        this.thumbnail_image = blogData.thumbnail_image;
        this.translations = blogData.translations;

        this.current_page = blogData.current_page;
        this.from = blogData.from;
        this.last_page = blogData.last_page;
        this.per_page = blogData.per_page;
        this.to = blogData.to;
        this.total = blogData.total;
    }
}
