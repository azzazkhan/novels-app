/* eslint-disable quotes */
interface Chapter {
    name: string;
    date: string;
    number: number;
    locked?: boolean;
}

interface Series {
    name: string;
    chapters: Chapter[];
}

const series: Series[] = [
    {
        name: 'Jiang Chen Awakens: A Shadowy Rise',
        chapters: [
            {
                number: 1,
                name: 'Son of the Celestial Emperor, Reincarnation and Rebirth',
                date: 'February 29, 2023',
            },
            { number: 2, name: 'Supportive father, loyal friends', date: 'February 29, 2023' },
            {
                number: 3,
                name: "Can't take a hint, trash them brutally",
                date: 'February 29, 2023',
            },
            { number: 4, name: 'Go Trash Yourself', date: 'February 29, 2023' },
            {
                number: 5,
                name: "If I can't cure you, then I'll go down with you",
                date: 'February 29, 2023',
                locked: true,
            },
            {
                number: 6,
                name: "Steward Jiang Zheng's worries",
                date: 'February 29, 2023',
                locked: true,
            },
            {
                number: 7,
                name: "Jiang Zheng's Stage, Pride and Elation",
                date: 'February 29, 2023',
                locked: true,
            },
            {
                number: 8,
                name: 'Shocking the Hall of Healing',
                date: 'February 29, 2023',
                locked: true,
            },
            { number: 9, name: "We're Seriously Rich", date: 'February 29, 2023', locked: true },
            {
                number: 10,
                name: 'Breakthrough, Four Meridians True Qi',
                date: 'February 29, 2023',
                locked: true,
            },
        ],
    },
    {
        name: 'Establishment in Skylaurel Kingdom',
        chapters: [
            {
                number: 11,
                name: 'Rampant Disciples of the Azure Heaven Northern Palace',
                date: 'May 13, 2023',
                locked: true,
            },
            {
                number: 12,
                name: "It's So Hard to Keep a Low Profile",
                date: 'May 14, 2023',
                locked: true,
            },
            {
                number: 13,
                name: 'Battling a Half Step Spirit Dao Realm',
                date: 'May 15, 2023',
                locked: true,
            },
            {
                number: 14,
                name: 'A Disadvantaged Half Step Spirit Dao Practitioner',
                date: 'May 16, 2023',
                locked: true,
            },
            {
                number: 15,
                name: 'Facing Off Against Four Practitioners Half a Step into the Spirit Dao Realm Alone',
                date: 'May 17, 2023',
                locked: true,
            },
            {
                number: 16,
                name: 'Bunch of Dumb Birds, Have Fun',
                date: 'May 18, 2023',
                locked: true,
            },
            {
                number: 17,
                name: 'Senior Brother Liu Almost Smacked to Death',
                date: 'May 20, 2023',
                locked: true,
            },
            {
                number: 18,
                name: 'Time for Jiang Chen to Put on a Front',
                date: 'May 21, 2023',
                locked: true,
            },
            {
                number: 19,
                name: 'An Old Man Who Plays Dumb, Acts Cute, and Has No Principles',
                date: 'May 21, 2023',
                locked: true,
            },
            {
                number: 20,
                name: 'The Difficult Problem of Settling Within the Capital',
                date: 'May 24, 2023',
                locked: true,
            },
        ],
    },
];

export default series;
