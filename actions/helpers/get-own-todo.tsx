import prisma from "@/lib/prisma";
import { currentUser } from "@clerk/nextjs";
import { Todo } from "@prisma/client";

export const getOwnTodo =  async (id: number): Promise<Todo> => {
  const todo = await prisma.todo.findUniqueOrThrow({
    where: { id }
  });

  const user = await currentUser(); // exists for sure due to clerk route guard

  if (user!.id !== todo.userId) {
    throw new Error('You are not authorized to update this todo');
  }

  return todo;
}