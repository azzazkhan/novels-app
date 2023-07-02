import { prisma } from 'lib/prisma';

export async function main() {
    try {
        const users = await prisma.user.findMany();

        console.log(users);
    } catch (err) {
        prisma.$disconnect();
    }
}
