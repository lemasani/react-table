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


export type Food = {
    id: number;
    name: string;
    price: number;
    description: string;
    image: string;
}

export const foods: Food[] = Array.from({ length: 50 }, (_, i) => ({
    id: i + 1,
    name: `Food${i + 1}`,
    price: Math.floor(Math.random() * 100),
    description: `This is a description for food ${i + 1}`,
    image: `https://source.unsplash.com/400x300/?food,${i + 1}`
}));