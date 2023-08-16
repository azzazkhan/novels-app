'use client';

import { FC, MouseEvent, useState } from 'react';
import Image, { StaticImageData } from 'next/image';

import originalStoriesBackground from 'assets/images/illustrations/original-stories-background.jpg';
import fanArtBackground from 'assets/images/illustrations/fan-art-illustration.jpg';
import { Label } from 'components/ui/label';
import classNames from 'classnames';

type NovelType = 'original' | 'fan-fic';

const options: Record<NovelType, { image: StaticImageData; label: string }> = {
    original: {
        image: originalStoriesBackground,
        label: 'Original Story',
    },
    'fan-fic': {
        image: fanArtBackground,
        label: 'Fan Art',
    },
};

const NovelTypeTiles: FC = () => {
    const [selected, setSelected] = useState<NovelType>();

    const handleClick = (type: NovelType) => (event: MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        setSelected(type);
    };

    return (
        <div className="flex flex-col space-y-1 5">
            <Label>Type</Label>

            <div className="grid grid-cols-2 gap-10">
                {Object.entries(options).map(([type, { image, label }]) => {
                    const active = type === selected;

                    return (
                        <button
                            type="button"
                            className="relative h-20 overflow-hidden bg-center bg-cover rounded-lg group"
                            onClick={handleClick(type as NovelType)}
                            key={type}
                        >
                            <Image
                                src={image}
                                className={classNames({
                                    'object-cover w-full h-full transition-all duration-300 transform group-hover:scale-110':
                                        true,
                                    'blur-sm group-hover:blur-none': selected && !active,
                                    'scale-110': selected && active,
                                })}
                                alt="Original Stories"
                            />
                            <div
                                className={classNames({
                                    'absolute inset-0 flex items-center justify-center transition-colors duration-300':
                                        true,
                                    'bg-black/30': selected && active,
                                    'bg-black/60 group-hover:bg-black/30': !(selected && active),
                                })}
                            >
                                <span className="font-bold text-white">{label}</span>
                            </div>
                        </button>
                    );
                })}
            </div>
        </div>
    );
};

export default NovelTypeTiles;
