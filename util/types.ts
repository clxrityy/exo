export interface Post {
    title: string;
    slug: {
        current: string;
        _type: string;
    };
    publishedAt: string;
    mainImage: string;
    preview: string;
    body: any;
    tags: Array<Tag>;
    _id: string;
    author: {
        _ref: string;
        _type: string;
    }
}

export interface Tag {
    title: string;
    slug: {
        current: string;
    };
    _id: string;
    icon: any;
}

export interface Author {
    _id: string;
    name: string;
    slug: {
        current: string;
        _type: string;
    };
    image: any;
    bio: any;
    _createdAt: string;
    _ref: string;
}