import { access, readFile, writeFile, constants } from 'fs/promises';
import { red, green } from 'chalk';
import { join } from 'path';

const directory = 'database/factories';

export const generateFactory = async (name: string) => {
    if (!name) {
        console.error(red('No name provided for factory generation!'));
        process.exit(1);
    }

    // Remove non-alphabet characters from specified filename
    name = name.replace(/[^a-z]/g, '-').replace('--', '-');
    const filename = `${name}.factory.ts`;
    const path = join(directory, filename);

    try {
        await access(path, constants.F_OK);
        console.error(red(`File [${filename}] already exists!`));
        process.exit(1);
    } catch (err) {
        // The file does not exists and this is our desired case
    }

    const contents = (await readFile('stubs/factory.stub')).toString();

    const factoryName = name
        .split('-')
        .map((segment) => {
            if (!segment) return '';

            return `${segment[0].toUpperCase()}${segment.slice(1, segment.length)}`;
        })
        .join('')
        .concat('Factory');

    await writeFile(join(directory, filename), contents.replace(/ObjectFactory/g, factoryName), {
        encoding: 'utf-8',
    });

    console.log(green(`\nModel factory [${factoryName}] created successfully!`));
};
