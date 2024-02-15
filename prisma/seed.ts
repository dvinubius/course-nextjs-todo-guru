import { PrismaClient, Prisma } from '@prisma/client'

const prisma = new PrismaClient();

const todoData: Prisma.TodoCreateInput[] = [
  {
    title: 'Clean up cellar',
    description: 'Sort into things to keep / give away / throw away, clean walls & floor, put keepers back in order',
    userId: 'user_2cHVf6ijRrSzQPOYg8s2PEnmcmB'
  },
  {
    title: 'Deliver e-shop',
    description: 'Finish e2e tests, deploy, present to client, wrap up admin stuff',
    userId: 'user_2cHVf6ijRrSzQPOYg8s2PEnmcmB'
  },
  {
    title: 'Pick up K',
    description: 'Pick up from airport with enough place for luggage',
    userId: 'user_2cHVf6ijRrSzQPOYg8s2PEnmcmB'
  },
  {
    title: 'Check invoice payments',
    description: 'Verify January invoices have been paid by Co1 and Co4, remind Co2 of bank account change',
    userId: 'user_2cHVf6ijRrSzQPOYg8s2PEnmcmB'
  },
  {
    title: 'Walk the Dog',
    description: 'Walk the cat, I mean the dog, around the block and back... I mean, he does kinda look like a cat, doesn\'t he?.',
    userId: 'user_2cHVf6ijRrSzQPOYg8s2PEnmcmB'
  },
]

async function main() {
  console.log(`Start seeding ...`)
  await prisma.todo.deleteMany({});
  for (const t of todoData) {
    const todo = await prisma.todo.create({
      data: t,
    });
    console.log(`Created todo with id: ${todo.id}`);
  }
  console.log(`Seeding finished.`);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  })