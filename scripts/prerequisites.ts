import { red } from 'chalk';

export async function run() {
    if (!process.env.APP_KEY) {
        console.error(red('No application encryption key is specified!'));
        process.exit(1);
    }
}
