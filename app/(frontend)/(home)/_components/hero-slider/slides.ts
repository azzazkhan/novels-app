/* eslint-disable quotes */
import type { StaticImageData } from 'next/image';
import image1 from 'assets/images/covers/demon-slayer-kimetsu-no-yaiba-tanjirou-kamado-2.jpg';
import image2 from 'assets/images/covers/demon-slayer-kimetsu-no-yaiba-tanjirou-kamado.jpg';
import image3 from 'assets/images/covers/illustration-city-landscape-walking-girl.jpg';
import image4 from 'assets/images/covers/man-near-torii-temple-gate.jpg';
import image5 from 'assets/images/covers/silhouette-of-steel-ridge-blue-and-pink-sky-painting.jpg';
import image6 from 'assets/images/covers/uchiha-itachi-naruto-shippuuden-anbu-silhouette.jpg';

declare type Author = string | { name: string; alt_name?: string };

interface Slide {
    image: StaticImageData;
    title: string;
    content: string;
    author?: Author;
}

const slides: Slide[] = [
    {
        image: image1,
        title: 'Overgeared',
        author: {
            name: 'Park Saenal',
            alt_name: '박새날',
        },
        content:
            'Shin Youngwoo has had an unfortunate life and is now stuck carrying bricks on construction sites. He even had to do labor in the VR game, Satisfy! However, luck would soon enter his hapless life. His character, ‘Grid’, would discover the Northern End Cave for a quest, and in that place, he would find ‘Pagma’s Rare Book’ and become a legendary class player',
    },
    {
        image: image2,
        title: 'Nine Star Hegemon Body Art',
        author: {
            name: 'Ordinary Magician',
            alt_name: '平凡魔术师',
        },
        content:
            "Long Chen, a crippled youth who cannot cultivate, is constantly targeted and bullied by his fellow noble heirs. After a particularly vicious beating, he wakes up and realizes a Pill Sovereign's soul has somehow merged with him, giving him some additional memories. Within those memories is the mysterious Nine Star Hegemon Body Art, a cultivation technique that even he can train in, but whose secrets and origin are still a mystery to him. Relying on his improved instincts as he finally begins to cultivate, he realizes a huge conspiracy is underfoot within the Phoenix Cry Empire; a conspiracy involving his father, members of the imperial family, and even the Emperor himself.",
    },
    {
        image: image3,
        title: 'Emperor’s Domination',
        author: {
            name: 'Yanbi Xiaosheng',
            alt_name: '厌笔萧生',
        },
        content:
            'A boy that was imprisoned for millions of years had regained his mortal body. He became a disciple of the declining Cleansing Incense Ancient Sect where its patriarch used to be his disciple. Now, he will bring this sect back to its former glory. This is his journey to reach the apex and take revenge on those who had imprisoned him. This is his story of meeting old friends and making new companions. This is his path of traversing the Nine Worlds and becoming the next ruler of the Heavens.',
    },
    {
        image: image4,
        title: 'Damn Reincarnation',
        author: {
            name: '목마',
        },
        content:
            'The warrior Hamel went on an adventure with his companions to defeat the Demon Kings, but after dying just before the final battle with the Demon Kings',
    },
    {
        image: image5,
        title: 'Martial God Asura',
        author: {
            name: 'Kindhearted Bee',
        },
        content:
            'Regarding potential — even if you are not considered a genius, you can still learn Mysterious Techniques and martial skills. Anyone can be enlightened without a master. Regarding strength—despite having a myriad of artifacts, you may not defeat my army of World Spirits.',
    },
    {
        image: image6,
        title: 'The Frozen Player Returns',
        author: {
            name: '제리엠',
        },
        content:
            'Five years after the world changed, the final boss appeared. [The final boss for area Earth, the Frost Queen, has appeared.] The final boss! If we can just defeat her, our lives will go back to normal! The top five players in the world, including Specter Seo Jun-ho, finally defeated the Frost Queen',
    },
];

export default slides;
