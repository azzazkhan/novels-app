import { Command } from 'commander';
import { main } from './scripts/database';

const program = new Command();

console.log('Hello world!');

program.version('0.1.0').command('migrate').action(main);
