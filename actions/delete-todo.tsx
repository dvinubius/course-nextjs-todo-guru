'use server'

import prisma from "@/lib/prisma";
import { getOwnTodo } from "./helpers/get-own-todo";

export const deleteTodo = async (id: number) => {
  await getOwnTodo(id);

  return prisma.todo.delete({
    where: { id }
  });
}