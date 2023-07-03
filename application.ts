import { Command } from 'commander';
import { config } from 'dotenv';
import runSeeders from 'database/seeder';
import { generateFactory, generateSeeder } from 'scripts/generators';

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

    // Generating model factory boilerplate
    program
        .command('make:factory')
        .description('Creates new model factory')
        .argument('<name>', 'Name of the model factory')
        .action(generateFactory);

    // Generating database seeder boilerplate
    program
        .command('make:seeder')
        .description('Creates new database seeder')
        .argument('<name>', 'Name of the database seeder')
        .action(generateSeeder);

    await program.parseAsync(process.argv);
}

main();
