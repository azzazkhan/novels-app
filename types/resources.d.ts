/* eslint-disable no-use-before-define */
export declare type Role = 'admin' | 'user';

export interface User extends Model, HasUuid {
    name: string;
    username: string;
    email: string;
    role: Role;
    email_verified_at: Nullable<string>;

    profile?: Profile;
    author?: Author;
}

export declare type Gender = 'male' | 'female' | 'other';

export interface Profile extends Model {
    bio: Nullable<string>;
    url: Nullable<string>;
    avatar: Nullable<string>;
    gender: Nullable<Gender>;
    user_id: number;

    user?: User;
}

export interface Author extends Model, HasUuid {
    name: string;
    alt_name: Nullable<string>;
    avatar: Nullable<string>;
    bio: Nullable<string>;
    user_id: number;

    user?: User;
}

export declare type NovelStatus = 'published' | 'draft';

export interface Novel extends DeletableModel, HasUuid {
    title: string;
    alt_title: Nullable<string>;
    slug: string;
    summary: string;
    thumbnail: string;
    completed: boolean;
    status: NovelStatus;
    author_id: number;

    author?: Author;
    categories?: Category[];
    tags?: Tag[];
}

export interface Category extends Model {
    name: string;
    slug: string;
    description: Nullable<string>;
    icon: Nullable<string>;
    parent_id: Nullable<number>;

    parent?: Category;
    children?: Category[];
    novels?: Novel[];
}

export interface Tag extends Model {
    name: string;
    slug: string;

    novels?: Novel[];
}
