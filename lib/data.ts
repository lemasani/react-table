export type User = {
    id: number;
    name: string;
    email: string;
    role: string;
    lastseen: string;
}
export const users: User[] = Array.from({ length: 50 }, (_, i) => ({
    id: i + 1,
    name: `User${i + 1}`,
    email: `user${i + 1}@example.com`,
    role: ['admin', 'editor', 'viewer'][i % 3],
    lastseen: new Date(Date.now() - Math.floor(Math.random() * 10000000000)).toISOString()
}));