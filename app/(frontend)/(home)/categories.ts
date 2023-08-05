import type { StaticImageData } from 'next/image';
import action from 'assets/images/covers/category-action.jpeg';
import adventure from 'assets/images/covers/category-adventure.png';
import fantasy from 'assets/images/covers/category-fantasy.jpg';
import harem from 'assets/images/covers/category-harem.jpg';
import horror from 'assets/images/covers/category-horror.jpg';
import romance from 'assets/images/covers/category-romance.jpg';

interface Category {
    name: string;
    slug: string;
    image: StaticImageData;
}

const categories: Category[] = [
    { name: 'Action', slug: 'action', image: action },
    { name: 'Adventure', slug: 'adventure', image: adventure },
    { name: 'Fantasy', slug: 'fantasy', image: fantasy },
    { name: 'Harem', slug: 'harem', image: harem },
    { name: 'Horror', slug: 'horror', image: horror },
    { name: 'Romance', slug: 'romance', image: romance },
];

export default categories;
