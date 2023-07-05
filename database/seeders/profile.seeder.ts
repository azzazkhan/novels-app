import type { DefinitionArgs } from 'types/database';
import { Seeder } from './seeder';
import { ProfileFactory } from 'database/factories';
import { prisma } from 'lib/prisma';
import { Profile } from '@prisma/client';

type Model = Profile;

export class ProfileSeeder extends Seeder {
    async run() {
        const users = await prisma.user.findMany({ select: { id: true } });

        await Promise.all(
            users.map(({ id: userId }) => ProfileFactory.exec<DefinitionArgs<Model>>(1, { userId }))
        );
    }
}
