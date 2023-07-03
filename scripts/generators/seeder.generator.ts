import { access, readFile, writeFile, constants } from 'fs/promises';
import { red, green } from 'chalk';
import { join } from 'path';

const directory = 'database/seeders';

export const generateSeeder = async (name: string) => {
    if (!name) {
        console.error(red('No name provided for seeder generation!'));
        process.exit(1);
    }

    // Remove non-alphabet characters from specified filename
    name = name.replace(/[^a-z]/g, '-').replace('--', '-');
    const filename = `${name}.seeder.ts`;
    const path = join(directory, filename);

    try {
        await access(path, constants.F_OK);
        console.error(red(`File [${filename}] already exists!`));
        process.exit(1);
    } catch (err) {
        // The file does not exists and this is our desired case
    }

    const contents = (await readFile('stubs/seeder.stub')).toString();

    const seederName = name
        .split('-')
        .map((segment) => {
            if (!segment) return '';

            return `${segment[0].toUpperCase()}${segment.slice(1, segment.length)}`;
        })
        .join('')
        .concat('Seeder');

    await writeFile(join(directory, filename), contents.replace(/ObjectSeeder/g, seederName), {
        encoding: 'utf-8',
    });

    console.log(green(`\nDatabase seeder [${seederName}] created successfully!`));
};
