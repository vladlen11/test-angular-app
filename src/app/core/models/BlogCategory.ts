export class BlogCategoryModel  {

    id: number;
    slug: string;
    translations: any;
    posts_count: number;

    constructor(
        blogCategoryData: BlogCategoryModel
    ) {
        this.id = blogCategoryData.id;
        this.slug = blogCategoryData.slug;
        this.translations = blogCategoryData.translations;
        this.posts_count = blogCategoryData.posts_count;
    }
}
