/* eslint-disable quotes */
import dualCultivation from 'assets/images/novels/dual-cultivation.jpg';
import iAloneLevelUp from 'assets/images/novels/i-alone-level-up.jpg';
import letMeGameInPeace from 'assets/images/novels/let-me-game-in-peace.jpg';
import myVampireSystem from 'assets/images/novels/my-vampire-system.jpg';
import reincarnationOfTheStrongestSwordGod from 'assets/images/novels/reincarnation-of-the-strongest-sword-god.jpg';
import scholarsAdvancedTechnologicalSystem from 'assets/images/novels/scholars-advanced-technological-system.jpg';
import supremeMagus from 'assets/images/novels/supreme-magus.jpg';
import theBeginningAfterTheEnd from 'assets/images/novels/the-beginning-after-the-end.jpg';
import theLegendaryMechanic from 'assets/images/novels/the-legendary-mechanic.jpg';
import worldsApocalypseOnline from 'assets/images/novels/worlds-apocalypse-online.jpg';
import { StaticImageData } from 'next/image';

declare type Author = { name: string; alt_name?: string; url?: string };

interface Novel {
    title: string;
    image: StaticImageData;
    alt_title?: string;
    slug: string;
    type: string;
    author?: Author;
    completed: boolean;
    rank: number;
    rating: number;
    summary: string;
    categories: Record<string, string>;
    tags: Record<string, string>;
}

const novels: Novel[] = [
    {
        title: 'The beginning after the end',
        image: theBeginningAfterTheEnd,
        slug: 'the-beginning-after-the-end',
        type: 'Web Novel',
        author: {
            name: 'TurtleMe',
            alt_name: '漫客文化',
            url: 'https://www.animemanganovels.org/authors/turtleme',
        },
        completed: false,
        rank: 1,
        rating: 4.5,
        summary:
            'King Gray has unrivaled strength, wealth, and prestige in a world governed by martial ability. However, solitude lingers closely behind those with great power. Beneath the glamorous exterior if a powerful king lurks the shell of man, devoid of purpose and will.\n\nReincarnated into a new world filled with magic and monsters, the king has a second change to relive his life. Correcting the mistakes of his past wil not be his only challenge, however. Underneath the peace and prosperity of the new world is an undercurrent threatening to destroy everything he has worked for, questioning his role and reason for being born again.',
        categories: {
            action: 'Action',
            comedy: 'Comedy',
            fantasy: 'Fantasy',
        },
        tags: {
            reincarnation: 'Reincarnation',
            'sword-wielder': 'SwordWielder',
            fantasy: 'Fantasy',
            'male-lead': 'MaleLead',
            'slow-romance': 'SlowRomance',
        },
    },
    {
        title: 'Reincarnation of the strongest sword god',
        image: reincarnationOfTheStrongestSwordGod,
        type: 'Web Novel',
        rank: 2,
        completed: false,
        rating: 4,
        slug: 'reincarnation-of-the-strongest-sword-god',
        summary:
            'Starting over once more, he has entered this "living game" again in order to control his own fate. This time, he will not be controlled by others. Previously the Level 200 Sword King, he will rise to a higher peak in this life. Methods to earn money! Dungeon conquering strategies! Legendary Quests! Equipment drop locations! Undiscovered battle techniques!',
        categories: {
            action: 'Action',
            adventure: 'Adventure',
            fantasy: 'Fantasy',
            'martial-arts': 'Martial Arts',
            xuanhuan: 'Xuanhuan',
            'video-games': 'Video Games',
        },
        tags: {
            'black-smith': 'BlackSmith',
            dungeon: 'Dungeon',
            dwarfs: 'Dwarfs',
            elves: 'Elves',
            'fantasy-creatures': 'FantasyCreatures',
            'game-ranking-system': 'GameRankingSystem',
            gamers: 'Gamers',
            guilds: 'Guilds',
            'hiding-true-identity': 'HidingTrueIdentity',
            knights: 'Knights',
            'level-system': 'LevelSystem',
            'lucky-protagonist': 'LuckyProtagonist',
            'male-protagonist': 'MaleProtagonist',
            mercenaries: 'Mercenaries',
            mmorpg: 'MMORPG',
            monsters: 'Monsters',
            'overpowered-protagonist': 'OverpoweredProtagonist',
            'previous-life-talent': 'PreviousLifeTalent',
            'second-chance': 'SecondChance',
            'skill-books': 'SkillBooks',
            'sword-and-magic': 'SwordAndMagic',
            'tragic-past': 'TragicPast',
            'virtual-reality': 'VirtualReality',
        },
    },
    {
        title: 'The legendary mechanic',
        image: theLegendaryMechanic,
        type: 'Web Novel',
        rank: 4,
        completed: false,
        rating: 4.9,
        slug: 'the-legendary-mechanic',
        summary:
            "What do you do when you wake up and find yourself inside a very game that you love? What do you do when you realize that you have not only become an NPC - you have even been thrown back in time to before the game even launched! What will happen when our protagonist's two realities coincide? Han Xiao was professional power leveler before his transmigration. Using his past life's knowledge, Han Xiao sweeps through the universe as he prepares for the arrival of the players. This is definitely not your typical transmigration novel.",
        categories: {
            action: 'Action',
            adventure: 'Adventure',
            comedy: 'Comedy',
            harem: 'Harem',
            mature: 'Mature',
            mecha: 'Mecha',
            'sci-fi': 'Sci-fi',
            supernatural: 'Supernatural',
        },
        tags: {
            'accelerated-growth': 'AcceleratedGrowth',
            'arms-dealer': 'ArmsDealers',
            army: 'Army',
            'arrogant-characters': 'ArrogantCharacters',
            'artificial-intelligence': 'ArtificialIntelligence',
            assassins: 'Assassins',
            automatons: 'Automatons',
            'average-looking-protagonist': 'AverageLookingProtagonist',
            'calm-protagonist': 'CalmProtagonist',
            'cautious-protagonist': 'CautiousProtagonist',
            'character-growth': 'CharacterGrowth',
            cheats: 'Cheats',
            'clever-protagonist': 'CleverProtagonist',
            'cosmic-wars': 'CosmicWars',
            crafting: 'Crafting',
            'cunning-protagonist': 'CunningProtagonist',
            engineer: 'Engineer',
            'evil-organizations': 'EvilOrganizations',
            'fast-learner': 'FastLearner',
            firearms: 'Firearms',
            'futuristic-setting': 'FuturisticSetting',
            'game-elements': 'GameElements',
            gamers: 'Gamers',
            'genetic-modifications': 'GeneticModifications',
            gunfighters: 'Gunfighters',
            hackers: 'Hackers',
            'hiding-true-identity': 'HidingTruIdentity',
            'level-system': 'LevelSystem',
            'lucky-protagonist': 'LuckyProtagonist',
            'male-protagonist': 'MaleProtagonist',
            mercenaries: 'Mercenaries',
            military: 'Military',
            'mob-protagonist': 'MobProtagonist',
            'multiple-protagonist': 'MultipleIdentities',
            'narcissistic-protagonist': 'NarcissisticProtagonist',
            nationalism: 'Nationalism',
            'outer-space': 'OuterSpace',
            'reincarnation-into-a-game-world': 'ReincarnationIntoAGameWorld',
            'ruthless-protagonist': 'RuthlessProtagonist',
            'secret-organizations': 'SecretOrganizations',
            'shameless-protagonist': 'ShamelessProtagonist',
            'skill-assimilation': 'SkillAssimilation',
            'skill-books': 'SkillBooks',
            'system-administrator': 'SystemAdministrator',
            'time-skip': 'TimeSkip',
            transmigration: 'Transmigration',
            'transported-into-a-game-world': 'TransportedIntoAGameWorld',
            wars: 'Wars',
            'weak-to-strong': 'WeakToStrong',
        },
    },
    {
        title: 'Supreme Magus',
        image: supremeMagus,
        type: 'Web Novel',
        rank: 6,
        completed: false,
        rating: 4.1,
        slug: 'supreme-magus',
        summary:
            'Derek McCoy was a man that since his youth had to face many adversities. Often forced to settle with surviving rather than living, had finally found his place in the world, until everything was taken from him one last time. After losing his life to avenge his brother, he reincarnates until he finds a world worth living for, a world filled with magic and monsters. Follow him along his journey, from grieving brother to alien soldier. From infant to Supreme Magus.',
        categories: { fantasy: 'Fantasy' },
        tags: {
            reincarnation: 'Reincarnation',
            magic: 'Magic',
            transmigration: 'Transmigration',
            fantasy: 'Fantasy',
            'hidden-gem': 'HiddenGem',
            'western-fantasy': 'WesternFantasy',
            'male-mc': 'MaleMC',
        },
    },
    {
        title: 'I alone level-up',
        image: iAloneLevelUp,
        type: 'Web Novel KR',
        rank: 11,
        completed: true,
        rating: 4.8,
        slug: 'i-alone-level-up',
        summary:
            'The Ant King (왕) was an immensely powerful Magic Beast born from the Ant Queen on Jeju Island where an S-Rank Gate had opened. The Ant Queen, who was monitored 24 hours a day by a Japanese satellite, showed a massive decline in its magical energy. It was later learned that this was due to the Ant Queen birthing her strongest child, the Ant King, for the sole purpose of beating strong Hunters. The King was one of the few magic beasts capable of communicating with Sung Jin-Woo similar to Baruka of the Red Gate and Kargalgan. Through his ability, Gluttony, the Ant King was able to learn human languages including Korean after devouring powerful S-Rank hunters. It is one of the most powerful magic beasts introduced within the series, with no hunters present during the Jeju Island Raid being able to fight against it, excluding Sung Jin-Woo. The Ant King is the primary antagonist of the Jeju Island Arc. To view the entire article, click Ant King.',
        categories: {
            action: 'Action',
            adventure: 'Adventure',
            fantasy: 'Fantasy',
            shounen: 'Shounen',
            supernatural: 'Supernatural',
        },
        tags: {
            'accelerated-growth': 'AcceleratedGrowth',
            'adapted-to-manhwa': 'AdaptedToManhwa',
            adventurers: 'Adventurers',
            'appearance-changes': 'AppearanceChanges',
            betrayal: 'Betrayal',
            'calm-protagonist': 'CalmProtagonist',
            'cautious-protagonist': 'CautiousProtagonist',
            'character-growth': 'CharacterGrowth',
            cheats: 'Cheats',
            'determined-protagonist': 'DeterminedProtagonist',
            dungeons: 'Dungeons',
            'game-elements': 'GameElements',
            'gate-to-another-world': 'GateToAnotherWorld',
            grinding: 'Grinding',
            'handsome-male-lead': 'HandsomeMaleLead',
            'ward-working-protagonist': 'HardWorkingProtagonist',
            'hiding-true-abilities': 'HidingTrueAbilities',
            kuudere: 'Kuudere',
            'level-system': 'LevelSystem',
            'male-protagonist': 'MaleProtagonist',
            misunderstandings: 'Misunderstandings',
            'modern-day': 'ModernDay',
            'near-death-experience': 'NearDeathExperience',
            necromancer: 'Necromancer',
            'personality-changes': 'PersonalityChanges',
            'weak-to-strong': 'WeakToStrong',
        },
    },
    {
        title: 'My vampire system',
        image: myVampireSystem,
        type: 'Web Novel',
        rank: 12,
        completed: false,
        rating: 4.2,
        slug: 'my-vampire-system',
        summary:
            'The human Race is at war with the Vicious Dalki and when they needed help more than ever, THEY started to come forward. Humans who had hidden in the shadows for hundreds of years, people with abilities. Some chose to share their knowledge to the rest of the world in hopes of winning the war, while others kept their abilities to themselves. Quinn had lost everything to the war, his home, his family and the only thing he had inherited was a crummy old book that he couldn’t even open. But when the book had finally opened, Quinn was granted a system and his whole life was turned around. He completed quest after quest and became more powerful, until one day the system gave him a quest he wasn’t sure he could complete.',
        categories: { action: 'Action', fantasy: 'Fantasy', 'sci-fi': 'Sci-fi' },
        tags: {
            action: 'Action',
            evolution: 'Evolution',
            'game-elements': 'GameElements',
            magic: 'Magic',
            'rpg-system': 'RPGSystem',
            'sci-fi': 'SciFi',
            system: 'System',
            vampires: 'Vampires',
            'weak-to-strong': 'WeakToStrong',
        },
    },
    {
        title: 'Dual Cultivation',
        image: dualCultivation,
        type: 'Web Novel',
        rank: 8,
        completed: false,
        rating: 4.5,
        slug: 'dual-cultivation',
        summary:
            'What is the point of wealth and status if there’s nobody to share it with? Dual Cultivation explores the sensual side of the Cultivation world that is often filled with solitude! Su Yang was sentenced to life in prison within the Eternal Retribution Cliff, where only the universe’s most violent and evil criminals dwell. His crime? He seduced the Moon God’s wife, kidnapped the Dragon King’s sister, and even touched the Heavenly Emperor’s beloved daughter. He later meets a mysterious old man who would help him escape prison by reincarnating him. In his new life, Su Yang swears to reunite with his lovers and hold them in his embrace once again, all the while finding new ones along the way.',
        categories: { 'eastern-fantasy': 'Eastern Fantasy', mature: 'mature', romance: 'Romance' },
        tags: {
            cultivation: 'Cultivation',
            mature: 'Mature',
            'r-18': 'R18',
            reincarnation: 'Reincarnation',
            romance: 'Romance',
            polygamy: 'Polygamy',
        },
    },
    {
        title: "World's apocalypse online",
        image: worldsApocalypseOnline,
        type: 'Web Novel',
        rank: 35,
        completed: false,
        rating: 4.4,
        slug: 'worlds-apocalypse-online',
        summary:
            'The end of all worlds approaches. The Demon King Order harvests lives from all manners of living beings. Within this darkness full of despair, A single person escaped from space-time, returned to before the world collapsed, determined to change the fate of the past. But as time pass, he gradually finds out that the Apocalypse isn’t quite as simple as he thinks',
        categories: { '': '' },
        tags: { '': '' },
    },
    {
        title: 'Let me game in peace',
        image: letMeGameInPeace,
        type: 'Web Novel',
        rank: 26,
        completed: false,
        rating: 4.2,
        slug: 'let-me-game-in-peace',
        summary:
            '1 drop of blood = 1-Up. Other people game overnight, I game overnight and bleed. Ever since the dimensional storms descended upon Earth, numerous dimensional zones have appeared, bringing with them all kinds of dimensional creatures—Immortals, Buddhas, Devils, Angels, Elves, etc. Yet, all these strange dimensional zones can turn into dungeon instances on my phone. Other people risk their lives adventuring, I spend all my time gaming. Monsters drop dimensional crystals that boost stats, imbue new skills, and join me as Companion Beasts. These Companion Beasts fight alongside me or alone, augmenting me with their skills and strength. Rare monsters in real life? I’ll just restart the game with a drop of blood to grind it. I really need a blood transfusion.',
        categories: { '': '' },
        tags: { '': '' },
    },
    {
        title: "Scholar's advanced technological system",
        image: scholarsAdvancedTechnologicalSystem,
        type: 'Web Novel',
        rank: 25,
        completed: false,
        rating: 4.8,
        slug: 'scholars-advanced-technological-system',
        summary:
            'After suffering from a heat stroke while working under the scorching heat of summer, Lu Zhou, a hardworking but poor university student, somehow becomes the owner of an advanced technological system. With the cheat given by the system, his university life changes overnight. A Master’s degree? Easy. PhD? Not a problem. From a nobody, he quickly becomes a huge celebrity in the world of science. With the missions given by the system, he is on his way to winning a Nobel Prize. “System, can points be exchanged for money?” “No.” “Fuck, what use are you then!?” “This system will make you the ultimate scholar, the kind that lords over all of humanity. What use will money be to you?”',
        categories: { '': '' },
        tags: { '': '' },
    },
];

export default novels;
