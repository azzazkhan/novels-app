import { spawnSync } from 'child_process';
import { prisma } from 'lib/prisma';
import chalk from 'chalk';

export default async function main(refresh = false) {
    console.log('\nInitializing database seeder script...');

    try {
        // Refresh the database if required
        if (refresh) {
            console.log(chalk.yellow('Dropping all tables since [--fresh] flag was set!'));
            spawnSync('prisma', ['migrate', 'reset']);
            console.log('Database re-migrated successfully!');
        }

        const users = await prisma.user.findMany();

        console.log(users);
    } catch (err) {
        prisma.$disconnect();
    }
}
