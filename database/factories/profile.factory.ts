import { faker } from '@faker-js/faker';
import type { DefinitionArgs, ModelDefinition } from 'types/database';
import { prisma } from 'lib/prisma';
import { Factory } from './factory';
import { Profile, Gender } from '@prisma/client';

type Model = Profile;

export class ProfileFactory extends Factory<Model> {
    async definition(attrs?: DefinitionArgs<Model>): Promise<ModelDefinition<Model>> {
        return {
            bio: faker.person.bio(),
            avatar: faker.image.avatar(),
            gender: faker.helpers.arrayElement(Object.values(Gender)),
            url: faker.internet.url(),
            userId: BigInt(1), // First user
            ...attrs,
        };
    }

    async create(attrs?: DefinitionArgs<Model>) {
        const data = await this.make(attrs);

        await (Array.isArray(data)
            ? prisma.profile.createMany({
                  data: data as ModelDefinition<Model>[],
                  skipDuplicates: true,
              })
            : prisma.profile.create({ data: data as ModelDefinition<Model> }));
    }
}
