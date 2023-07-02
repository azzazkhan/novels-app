import argon2 from 'argon2';

export const hash = (password: string) =>
    argon2.hash(password, { secret: Buffer.from(process.env.APP_KEY) });

export const verify = (hash: string, plain: string) =>
    argon2.verify(hash, plain, { secret: Buffer.from(process.env.APP_KEY) });
