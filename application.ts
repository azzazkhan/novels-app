import { Command } from 'commander';
import { config } from 'dotenv';
import runSeeders from 'database/seeder';

config(); // Configure environment variables
const program = new Command();

program
    .name('Novels CLI')
    .description('Tool for managing application through local and automated environments')
    .version('1.0.1');

async function main() {
    // Make sure all prerequisites are met before running scripts!
    (await import('./scripts/prerequisites')).run();

    // Seeding database for quick prototyping
    program
        .command('seed')
        .description('Run all registered database seeders')
        .option('--fresh', 'Remove all data before seeding')
        .action(async (options) => runSeeders({ refresh: !!options.fresh }));

    await program.parseAsync(process.argv);
}

main();
