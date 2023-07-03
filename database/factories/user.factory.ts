import { User } from '@prisma/client';
import { faker } from '@faker-js/faker';
import type { DefinitionArgs, ModelDefinition } from 'types/database';
import { hash } from 'lib/utils';
import { prisma } from 'lib/prisma';
import { Factory } from './factory';

export class UserFactory extends Factory<User> {
    async definition(attrs?: DefinitionArgs<User>): Promise<ModelDefinition<User>> {
        const password = attrs?.password || '$Lorem123';
        attrs && delete attrs.password;

        return {
            name: faker.person.fullName(),
            username: faker.internet.userName(),
            email: faker.internet.email(),
            password: await hash(password),
            ...attrs,
        };
    }

    async create(attrs?: DefinitionArgs<User>) {
        const data = await this.make(attrs);

        await (Array.isArray(data)
            ? prisma.user.createMany({
                  data: data as ModelDefinition<User>[],
                  skipDuplicates: true,
              })
            : prisma.user.create({ data: data as ModelDefinition<User> }));
    }
}
