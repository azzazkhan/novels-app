import { spawnSync } from 'child_process';
import { yellow } from 'chalk';

export const refreshDatabase = () => {
    console.log(yellow('Dropping all tables since [--fresh] flag was set!'));
    spawnSync('prisma', ['migrate', 'reset', '-f']);
    console.log('Database re-migrated successfully!');
};
