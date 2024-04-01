const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function createTask(name, dueDate) {
    return await prisma.task.create({
        data: {
            name,
            dueDate
        }
    });
}

async function getTasks() {
    return await prisma.task.findMany();
}

async function getTasks(pageNumber, pageSize) {
    const tasks = await prisma.task.findMany({
        skip: (pageNumber - 1) * pageSize,
        take: pageSize
    });
    return tasks;
}