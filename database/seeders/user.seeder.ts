import type { User } from '@prisma/client';
import type { DefinitionArgs } from 'types/database';
import { UserFactory } from '../factories/user.factory';
import { Seeder } from './seeder';

export class UserSeeder extends Seeder {
    async run() {
        await UserFactory.exec<DefinitionArgs<User>>(1, {
            name: 'Administrator',
            username: 'admin',
            email: 'admin@example.com',
            password: '$Lorem123',
        });

        await UserFactory.exec<DefinitionArgs<User>>(10);
    }
}
