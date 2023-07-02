import { Command } from 'commander';
import runSeeder from './scripts/seeder';

const program = new Command();

program
    .name('Novels CLI')
    .description('Tool for managing application through local and automated environments')
    .version('1.0.1');

async function main() {
    program
        .command('seed')
        .description('Run all registered database seeders')
        .option('--fresh', 'Remove all data before seeding')
        .action((options) => runSeeder(!!options.fresh));

    await program.parseAsync(process.argv);
}

main();
