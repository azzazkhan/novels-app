import type { DetailedHTMLProps, FC, HTMLAttributes } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Container } from 'components/common';
import categories from './categories';

interface Props
    extends Omit<
        DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
        'className' | 'ref'
    > {
    className?: ClassName;
}

const Categories: FC<Props> = (props) => {
    return (
        <Container {...props}>
            <h2 className="mb-4 text-2xl font-bold md:text-3xl">Featured Categories</h2>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
                {categories.map(({ name, slug, image }, idx) => {
                    return (
                        <Link
                            href={`/categories/${slug}`}
                            className="relative flex items-center justify-center p-4 overflow-hidden transition-colors h-28 md:h-32 xl:h-36 rounded-2xl bg-black/30 group hover:bg-black/40"
                            key={idx}
                        >
                            <Image
                                src={image}
                                className="h-full w-full absolute z-[-1] top-0 left-0 object-cover transition-transform transform group-hover:scale-110 duration-700"
                                alt={name}
                            />
                            <h4 className="text-3xl font-bold text-white">{name}</h4>
                        </Link>
                    );
                })}
            </div>
        </Container>
    );
};

export default Categories;
