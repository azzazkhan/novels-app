import type { DetailedHTMLProps, FC, HTMLAttributes } from 'react';
import Link from 'next/link';
import { Container } from 'components/common';
import categories from './categories';
import Image from 'next/image';

interface Props
    extends Omit<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, 'className'> {
    className?: ClassName;
}

const Categories: FC<Props> = (props) => {
    return (
        <Container {...props}>
            <h2 className="mb-4 text-2xl md:text-3xl font-bold">Featured Categories</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4">
                {categories.map(({ name, slug, image }, idx) => {
                    return (
                        <Link
                            href={`/categories/${slug}`}
                            className="flex justify-center items-center h-28 md:h-32 xl:h-36 rounded-2xl p-4 relative bg-black/30 overflow-hidden group transition-colors hover:bg-black/40"
                            key={idx}
                        >
                            <Image
                                src={image}
                                className="h-full w-full absolute z-[-1] top-0 left-0 object-cover transition-transform transform group-hover:scale-110 duration-700"
                                alt={name}
                            />
                            <h4 className="text-3xl text-white font-bold">{name}</h4>
                        </Link>
                    );
                })}
            </div>
        </Container>
    );
};

export default Categories;
