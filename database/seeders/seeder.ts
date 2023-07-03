import type { Seeder as ISeeder } from 'types/database';

export class Seeder implements ISeeder {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    async run() {}

    /**
     * Create an instance of the seeder and run it.
     */
    static async exec(): Promise<void> {
        await new this().run();
    }
}
