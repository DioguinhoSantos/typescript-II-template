type TPerson = {
    id: string;
    name: string;
    email: string;
    password: string;
    role: string;
}

type TAdminAccount = {
    account: string;
    permission: boolean;
}

type TNormalAccount = {
    account: string;
    permission: boolean;
}

enum ROLE {
    ADMIN = 'Admin',
    NORMAL = 'Normal'
}

type UserInfo = TPerson & TAdminAccount | TPerson & TNormalAccount

const pessoa1: UserInfo = {
    id: '001',
    name: 'Diogo',
    email: 'diogo@gmail.com',
    password: '123',
    role: ROLE.ADMIN,
    account: 'corrent',
    permission: true
}

const pessoa2: UserInfo = {
    id: '002',
    name: 'Coliro',
    email: 'coliro@gmail.com',
    password: '123',
    role: ROLE.NORMAL,
    account: 'corrent',
    permission: false
}

const users: UserInfo[] = [];

users.push(pessoa1, pessoa2);

console.table(users);