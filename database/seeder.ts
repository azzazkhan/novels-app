/* eslint-disable no-await-in-loop */
/* eslint-disable no-restricted-syntax */
import { Seeder } from './seeders/seeder';
import seeders from './seeders';
import { refreshDatabase } from './utils';

interface Props {
    refresh?: boolean;
}

declare type Fn = (props: Props) => Promise<void>;

const runSeeders: Fn = async ({ refresh }) => {
    console.log('\nInitializing database seeder script...');
    if (refresh) refreshDatabase(); // Refresh database if required

    for (const seeder of seeders as unknown as Array<typeof Seeder & { name: string }>) {
        console.log(`\nPreparing to run seeder [${seeder.name}]...`);
        const start = performance.now();
        await seeder.exec();
        const end = performance.now();

        const duration = ((end - start) / 1000).toFixed(3);
        console.log(`Finished running [${seeder.name}] in ${duration} sec`);
    }
};

export default runSeeders;
