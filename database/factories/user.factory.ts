import { User } from '@prisma/client';
import { faker } from '@faker-js/faker';
import { Factory } from './factory';
import { hash } from 'lib/utils';
import { prisma } from 'lib/prisma';

export class UserFactory extends Factory {
    async definition(attrs?: DefinitionArgs<User>): Promise<ModelDefinition<User>> {
        return {
            name: faker.person.fullName(),
            username: faker.internet.userName(),
            email: faker.internet.email(),
            password: await hash('$Lorem123'),
            ...attrs,
        };
    }

    async create(attrs?: DefinitionArgs<User>) {
        const data = await this.make(attrs);

        Array.isArray(data)
            ? prisma.user.createMany({
                  data: data as ModelDefinition<User>[],
                  skipDuplicates: true,
              })
            : prisma.user.create({ data: data as ModelDefinition<User> });
    }
}
